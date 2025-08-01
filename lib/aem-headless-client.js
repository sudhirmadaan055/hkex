/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */

import AEMHeadless from '@adobe/aem-headless-client-js';
import { mockTeamsData, mockAdventuresData } from './mock-data.js';

/**
 * This file defines a singleton that exposes AEM concerns to the rest of the app.
 * This includes:
 * - getters that invoke AEM GraphQL persisted queries
 * - helper functions for resources, such as images, that need to be served from AEM
 */
class AemHeadlessClient {
  aemHost; 
  useMockData = false;

  /**
   * Create an instance of the AEM Headles Client for JS used to communicate with AEM Headless GraphQL endpoints.
   * 
   * @param {*} serviceURL the AEM HOST this Next.js app will connect to.
   */
  constructor({ serviceURL }) {
    this.aemHost = serviceURL;
    
    this.aemHeadlessClient = new AEMHeadless({
      serviceURL: serviceURL,
      endpoint: 'The endpoint is not used as it only applies to client-side GraphQL queries which are not Adobe best practices.',
      auth: this._getAuth(),
      fetch: fetch
    });
  }

  /**
   * Convenience method for turning auth schemes specified in the .env.* files into auth signatures recognized by the AEM Headless client for JS.
   * @returns a valid auth object based on env variables
   */
  _getAuth() {
    let auth;

    if (process.env.AEM_AUTH_METHOD === 'basic') {
      auth = [ process.env.AEM_AUTH_USER, process.env.AEM_AUTH_PASSWORD];
    } else if (process.env.AEM_AUTH_METHOD === 'dev-token') {
      auth = process.env.AEM_AUTH_DEV_TOKEN;
    }
    
    return auth;
  }

  /**
   * Generates an absoluate URL resolvable to AEM. This is typically used for images.
   * 
   * @param {*} url 
   * @returns the urlPath prefixd with the AEM service host
   */
  serveFromAem(url) {
    if (url.startsWith("/")) {
      return new URL(url, this.aemHost).toString();
    }
    return url;  }

  /**
   * Invokes the AEM GraphQL endpoint first, falls back to local API if that fails.
   * 
   * @returns a response of all teams.
   */
  async getAllTeams(queryVariables = {}) {
    // First try AEM GraphQL endpoint
    const queryAllTeams = process.env.NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT + '/sample-query';
      
    try {
      const aemResponse = await this.aemHeadlessClient.runPersistedQuery(queryAllTeams, queryVariables);
      console.log('Using AEM GraphQL teams data');
      return aemResponse;
    } catch(e) {
      console.error('Error fetching all teams from AEM GraphQL:', e);
      
      // Check if it's an authentication error
      if (e.code === 'RESPONSE_ERROR' && e.message.includes('Unexpected end of JSON input')) {
        console.log('Authentication error detected, trying local API');
      }
      
      // Fallback to local API endpoint
      try {
        const response = await fetch('http://localhost:3000/api/teams');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Using local teams API data');
        return data;
      } catch(localError) {
        console.error('Error fetching all teams from local API:', localError);
        
        // Final fallback to mock data
        console.log('Falling back to mock data');
        return mockTeamsData;
      }
    }    
  }

  /**
   * Invokes the 'adventures-all` persisted query using the parameterizable namespace.
   * 
   * @returns a GraphQL response of all adventures.
   */
  async getAllAdventures(queryVariables = {}) {
    // If we're using mock data, return it immediately
    if (this.useMockData) {
      console.log('Using mock adventures data');
      return mockAdventuresData;
    }

    const queryAdventuresAll = process.env.NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT + '/adventures-all';
      
    try {
      return await this.aemHeadlessClient.runPersistedQuery(queryAdventuresAll, queryVariables);
    } catch(e) {
      console.error('Error fetching all adventures:', e);
      
      // Check if it's an authentication error
      if (e.code === 'RESPONSE_ERROR' && e.message.includes('Unexpected end of JSON input')) {
        console.log('Authentication error detected, falling back to mock data');
        this.useMockData = true;
        return mockAdventuresData;
      }
      
      throw e;
    }    
  }

  /**
   * Invokes the 'adventures-all` persisted query using the parameterizable namespace.
   * This then collects all the slugs (aka id's) fot the adventures. This is ultimately used to power the SSG of adventure detail pages.
   * 
   * @returns a list of slugs of all adventures. 
   */
  async getAdventureSlugs() {
    let adventures = [];
    try {
      const res = await this.getAllAdventures();
      adventures = res?.data?.adventureList?.items || [];
    } catch(e) {
      console.error('Error fetching adventure slugs:', e);
      return [];
    }
    
    return adventures.map((item) => ({
      params: {
        slug: [item.slug],
      }
    }));
  }

  /**
   * Invokes the 'adventure-by-slug` persisted query using the parameterizable namespace.
   * This is used to power the adventure details page.
   * @param {*} slug the adventure's slug
   * @returns the adventure's details.
   */
  async getAdventuresBySlug(slug, queryVariables = {}) {
    // If we're using mock data, return mock adventure
    if (this.useMockData) {
      console.log('Using mock adventure data for slug:', slug);
      const mockAdventure = mockAdventuresData.data.adventureList.items.find(item => item.slug === slug);
      if (mockAdventure) {
        return {
          data: {
            adventureList: {
              items: [mockAdventure]
            }
          }
        };
      }
      throw new Error('Adventure not found');
    }

    queryVariables = {...queryVariables, 'slug': slug};
    const queryAdventuresBySlug = process.env.NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT + '/adventure-by-slug';

    try {
      return await this.aemHeadlessClient.runPersistedQuery(queryAdventuresBySlug, queryVariables);
    } catch(e) {
      console.error('Error fetching adventure by slug:', e);
      
      // Check if it's an authentication error
      if (e.code === 'RESPONSE_ERROR' && e.message.includes('Unexpected end of JSON input')) {
        console.log('Authentication error detected, falling back to mock data');
        this.useMockData = true;
        return this.getAdventuresBySlug(slug, queryVariables);
      }
      
      throw e;
    }
  }

  /**
   * Invokes the AEM GraphQL endpoint first, falls back to local API if that fails.
   * This is used to power the team details page.
   * @param {*} shortName the team's shortName (used as slug in URL)
   * @returns the team's details.
   */
  async getTeamBySlug(shortName, queryVariables = {}) {
    // First try AEM GraphQL endpoint
    queryVariables = {...queryVariables, 'shortName': shortName};
    const queryTeamBySlug = process.env.NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT + '/sample-query?q=new4';
    try {
      const aemResponse = await this.aemHeadlessClient.runPersistedQuery(queryTeamBySlug, queryVariables);
      return aemResponse;
    } catch(e) {
      console.error('Error fetching team by shortName from AEM GraphQL:', e);
      
      // Check if it's an authentication error
      if (e.code === 'RESPONSE_ERROR' && e.message.includes('Unexpected end of JSON input')) {
        console.log('Authentication error detected, trying local API');
      }
      
      // Fallback to local API endpoint
      // try {
      //   const response = await fetch(`http://localhost:3000/api/teams/${shortName}`);
      //   console.log('response', response);
      //   if (!response.ok) {
      //     if (response.status === 404) {
      //       throw new Error('Team not found');
      //     }
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      //   const data = await response.json();
      //   console.log('Using local team API data for shortName:', shortName);
      //   return data;
      // } catch(localError) {
      //   console.error('Error fetching team by shortName from local API:', localError);
        
      //   // Final fallback to mock data
      //   console.log('Falling back to mock data');
      //   const mockTeam = mockTeamsData.data.teamList.items.find(item => item.shortName === shortName);
      //   if (mockTeam) {
      //     return {
      //       data: {
      //         teamList: {
      //           items: [mockTeam]
      //         }
      //       }
      //     };
      //   }
      //   throw new Error('Team not found');
      // }
    }
  }
}

/**
 * Export the initialized AEM Headless client object for use in the Next.js app
 */
export default new AemHeadlessClient({ serviceURL: process.env.NEXT_PUBLIC_AEM_HOST });