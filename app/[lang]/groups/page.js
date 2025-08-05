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

import Layout from '../../../components/layout';
import NewsCarousel from '../../../components/NewsCarousel';
import HeroBanner from '../../../components/HeroBanner';
import Community from '../../../components/Community';
import Header from '../../../components/PageHeader';
import Q1Results from '../../../components/Q1Results';


export default async function Teams() {
  try {
      return (
        <Layout>
          <Header />
          <div>
            <HeroBanner />
          </div>
          <div className="container-fluid bg-light">
            <NewsCarousel cfPath="/content/dam/my-project/en/hkex-carousel"/>
            <NewsCarousel cfPath="/content/dam/my-project/en/latest-hkex-carousel" variation="text-blue"/>
            <Q1Results />
            <Community cfPath="/content/dam/my-project/en/hkex-community-banner"/>
            
          </div>
        </Layout>
      );
  }  catch (error) {
    console.error('Error loading:', error);
    return (
      <Layout>
        <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="mb-4">
                  <i className="bi bi-exclamation-triangle fs-1 text-danger"></i>
                </div>
                <h2 className="display-5 fw-bold text-dark mb-3">Oops! Something went wrong</h2>
                <p className="lead text-muted mb-4">
                  We're having trouble loading. Please try again later.
                </p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="btn btn-primary btn-lg rounded-pill px-4 py-2"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
} 