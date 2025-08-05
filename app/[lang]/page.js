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

import Layout from '../../components/layout';
// import AdventureCard from '../../components/adventure-card';
// import aemHeadlessClient from '../../lib/aem-headless-client';

// export const metadata = {
//   title: 'HKEX',
//   description: 'https://www.hkex.com.hk/Market/home/media_20250725170911/HKEX%2025A%20Logo%20%20Group%20%20Market%20Mono.png?_20250221T101910Z',
// };

export default async function Adventures({ params }) {
  const { lang } = params;
  
  try {
    // const queryVariables = {
    //   imageFormat: 'PNG',
    //   imageWidth: 262,
    //   imageQuality: 80,
    // };

    //const res = await aemHeadlessClient.getAllAdventures(queryVariables);
    //const adventures = res?.data?.adventureList?.items || [];

    // if (!adventures.length) {
    //   return (
    //     <Layout>
    //       <div className="max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
    //         <h2 className="text-2xl font-light tracking-tight text-gray-900">No adventures found</h2>
    //         <p className="mt-4 text-gray-600">There are currently no adventures available. Please check back later.</p>
    //       </div>
    //     </Layout>
    //   );
    // }

    return (
      <Layout>
        <section className="bg-white">
          <div className="max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-light tracking-tight text-gray-900">Demo Template?</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
             
            </div>
          </div>
        </section>
      </Layout>
    );
  } catch (error) {
    console.error('Error loading adventures:', error);
    return (
      <Layout>
        <div className="max-w-2xl mx-auto py-10 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-light tracking-tight text-gray-900">Error loading adventures</h2>
          <p className="mt-4 text-gray-600">There was an error loading the adventures. Please check your connection and try again.</p>
          <div className="mt-6">
            <p className="text-sm text-gray-500">
              Make sure your environment variables are properly configured:
            </p>
            <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
              <li>NEXT_PUBLIC_AEM_HOST should point to your AEM instance</li>
              <li>NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT should be set to /graphql/execute.json/gpoc</li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
} 