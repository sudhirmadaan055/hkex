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
    
    // Use global fetch - Next.js 18+ provides fetch globally
    this.aemHeadlessClient = new AEMHeadless({
      serviceURL: serviceURL,
      endpoint: 'The endpoint is not used as it only applies to client-side GraphQL queries which are not Adobe best practices.',
      auth: this._getAuth(),
      fetch: fetch.bind(globalThis)
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

  async getData(path, cfPath = '', queryVariables = {}) {
    // First try AEM GraphQL endpoint
    const randomParam = Math.random().toString(36).substring(7);
    const queryAllTeams = `${process.env.NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT}${path}${cfPath}?=${randomParam}`;
      
    try {
      const aemResponse = await this.aemHeadlessClient.runPersistedQuery(queryAllTeams, queryVariables);
      console.log('Using AEM GraphQL teams data');
      return aemResponse;
    } catch(e) {
      console.error('Error fetching all teams from AEM GraphQL:', e);
      
      // Check if it's an authentication error
      // if (e.code === 'RESPONSE_ERROR' && e.message.includes('Unexpected end of JSON input')) {
      //   console.log('Authentication error detected, trying local API');
      // }
      
      // // Fallback to local API endpoint
      // try {
      //   const response = await fetch('http://localhost:3000/api/teams');
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      //   const data = await response.json();
      //   console.log('Using local teams API data');
      //   return data;
      // } catch(localError) {
      //   console.error('Error fetching all teams from local API:', localError);
        
      //   // Final fallback to mock data
      //   console.log('Falling back to mock data');
      //   return mockTeamsData;
      // }
    }    
  }

}

/**
 * Export the initialized AEM Headless client object for use in the Next.js app
 */
export default new AemHeadlessClient({ serviceURL: process.env.NEXT_PUBLIC_AEM_HOST });