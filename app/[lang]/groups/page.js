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
import Link from 'next/link';
import aemHeadlessClient from '../../../lib/aem-headless-client';
import TeamImage from '../../../components/TeamImage';
import NewsCarousel from '../../../components/NewsCarousel';
import HeroBanner from '../../../components/HeroBanner';

export const metadata = {
  title: 'Teams',
  description: 'Meet our amazing teams',
};

// Force static generation
// export const dynamic = 'force-static';
// export const revalidate = false;

// Web-sourced fallback images for different team types
const getTeamFallbackImage = (teamName, index) => {
  const images = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center'
  ];
  return images[index % images.length];
};

// Color schemes for different team blocks
const getTeamColorScheme = (index) => {
  const schemes = [
    {
      primary: 'from-blue-500 to-blue-600',
      secondary: 'bg-blue-50',
      accent: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-800'
    },
    {
      primary: 'from-purple-500 to-purple-600',
      secondary: 'bg-purple-50',
      accent: 'text-purple-600',
      badge: 'bg-purple-100 text-purple-800'
    },
    {
      primary: 'from-green-500 to-green-600',
      secondary: 'bg-green-50',
      accent: 'text-green-600',
      badge: 'bg-green-100 text-green-800'
    },
    {
      primary: 'from-pink-500 to-pink-600',
      secondary: 'bg-pink-50',
      accent: 'text-pink-600',
      badge: 'bg-pink-100 text-pink-800'
    },
    {
      primary: 'from-indigo-500 to-indigo-600',
      secondary: 'bg-indigo-50',
      accent: 'text-indigo-600',
      badge: 'bg-indigo-100 text-indigo-800'
    },
    {
      primary: 'from-orange-500 to-orange-600',
      secondary: 'bg-orange-50',
      accent: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-800'
    }
  ];
  return schemes[index % schemes.length];
};

// Fallback avatar images for team members
const getFallbackAvatar = (name) => {
  const colors = [
    'bg-primary', 'bg-success', 'bg-info', 'bg-warning', 
    'bg-danger', 'bg-secondary', 'bg-dark', 'bg-light'
  ];
  const colorIndex = name.length % colors.length;
  return colors[colorIndex];
};

// Generate initials from full name
const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export default async function Teams() {
  try {
    const res = await aemHeadlessClient.getData('hkex-header', ';cfPath=/content/dam/my-project/en/hkex-header');
    const teams = res?.data?.teamList?.items || [];

    if (!teams.length) {
      return (
        <Layout>
          <div>
            <HeroBanner />
          </div>
          <div>
            <NewsCarousel />
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        <div className="container-fluid bg-light">
          {/* Hero Section */}
          <section className="py-5 bg-white">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="text-center text-lg-start">
                    <h1 className="display-3 fw-bold text-dark mb-4">
                      Meet Our
                      <span className="d-block text-primary">Amazing Team</span>
                    </h1>
                    <p className="lead text-muted mb-4">
                      Discover the talented individuals who make our projects extraordinary. 
                      Each team member brings unique expertise and passion to create something amazing.
                    </p>
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                      <span className="badge bg-primary fs-6 px-4 py-2 rounded-pill">
                        {teams.reduce((total, team) => total + (team.teamMembers?.length || 0), 0)} Team Members
                      </span>
                      <span className="badge bg-secondary fs-6 px-4 py-2 rounded-pill">
                        {teams.length} Teams
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0">
                  <div className="position-relative">
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-4" style={{transform: 'rotate(3deg)'}}></div>
                    <TeamImage 
                      src={getTeamFallbackImage('hero', 0)}
                      alt="Our amazing team"
                      className="w-100 rounded-4 shadow-lg position-relative"
                      style={{height: '400px', objectFit: 'cover'}}
                      teamTitle="Our Team"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Teams Section */}
          <section className="py-5">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-8 text-center">
                  <h2 className="display-4 fw-bold text-dark mb-3">Our Teams</h2>
                  <p className="lead text-muted">
                    Each team is carefully crafted with diverse skills and expertise to deliver exceptional results
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {teams.map((team, index) => (
                  <div key={index} className="col-12">
                    <Link href={`/teams/${team.shortName}`} className="text-decoration-none" prefetch={false}>
                      <div className="card border-0 shadow-lg h-100 hover-lift transition-all">
                        <div className="row g-0 h-100">
                          {/* Team Content */}
                          <div className="col-lg-6 p-4 p-lg-5 d-flex flex-column justify-content-center">
                            <div className="mb-3">
                              <span className="badge bg-primary-subtle text-primary fs-6 px-3 py-2 rounded-pill">
                                Team {index + 1}
                              </span>
                            </div>
                            
                            <h3 className="display-6 fw-bold text-dark mb-3">
                              {team.title}
                            </h3>
                            
                            <p className="text-muted mb-4 fs-5">
                              {team.description?.plaintext || 'A collaborative team working together to achieve amazing results.'}
                            </p>
                            
                            {/* Team Stats */}
                            <div className="row g-3 mb-4">
                              <div className="col-4 text-center">
                                <div className="h3 fw-bold text-primary mb-1">
                                  {team.teamMembers?.length || 0}
                                </div>
                                <div className="small text-muted fw-medium">Members</div>
                              </div>
                              <div className="col-4 text-center">
                                <div className="h3 fw-bold text-info mb-1">
                                  {team.teamMembers?.reduce((total, member) => 
                                    total + (member.occupation?.length || 0), 0
                                  ) || 0}
                                </div>
                                <div className="small text-muted fw-medium">Roles</div>
                              </div>
                              <div className="col-4 text-center">
                                <div className="h3 fw-bold text-success mb-1">
                                  {team.teamMembers ? new Set(team.teamMembers.flatMap(member => member.occupation || [])).size : 0}
                                </div>
                                <div className="small text-muted fw-medium">Skills</div>
                              </div>
                            </div>
                            
                            {/* Member Avatars */}
                            <div className="mb-4">
                              <h6 className="text-uppercase fw-bold text-dark mb-3">Team Members</h6>
                              <div className="d-flex flex-wrap gap-2">
                                {team.teamMembers?.slice(0, 6).map((member, memberIndex) => (
                                  <div key={memberIndex} className="position-relative">
                                    <div className={`rounded-circle d-flex align-items-center justify-center text-white fw-bold shadow-sm border border-white`}
                                         style={{
                                           width: '50px',
                                           height: '50px',
                                           backgroundColor: getFallbackAvatar(member.fullName).includes('bg-') ? 
                                             getFallbackAvatar(member.fullName).replace('bg-', '') : 'primary'
                                         }}>
                                      {getInitials(member.fullName)}
                                    </div>
                                    <div className="position-absolute bottom-100 start-50 translate-middle-x mb-2 p-2 bg-dark text-white rounded opacity-0 hover-opacity-100 transition-opacity" style={{whiteSpace: 'nowrap', zIndex: 10}}>
                                      <div className="fw-semibold small">{member.fullName}</div>
                                      {member.occupation && member.occupation.length > 0 && (
                                        <div className="text-light small">
                                          {member.occupation.join(', ')}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                                {team.teamMembers && team.teamMembers.length > 6 && (
                                  <div className="rounded-circle d-flex align-items-center justify-content-center text-muted fw-bold shadow-sm border border-white bg-light"
                                       style={{width: '50px', height: '50px'}}>
                                    +{team.teamMembers.length - 6}
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            {/* CTA Button */}
                            <div className="mt-auto">
                              <button className="btn btn-primary btn-lg rounded-pill px-4 py-2 shadow-sm">
                                View Team Details
                                <i className="bi bi-arrow-right ms-2"></i>
                              </button>
                            </div>
                          </div>
                          
                          {/* Team Image */}
                          <div className="col-lg-6 position-relative">
                            <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-end"></div>
                            <TeamImage 
                              src={getTeamFallbackImage(team.title, index)}
                              alt={`${team.title} team`}
                              className="w-100 h-100 rounded-end position-relative"
                              style={{objectFit: 'cover', minHeight: '300px'}}
                              teamTitle={team.title}
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="row justify-content-center mt-5">
                <div className="col-lg-10">
                  <div className="card bg-primary text-white border-0 shadow-lg">
                    <div className="card-body p-5 text-center">
                      <h3 className="text-3xl font-bold mb-6">
                        Want to Join Our Amazing Teams?
                      </h3>
                      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        We're always looking for talented individuals to join our diverse and dynamic teams. 
                        Get in touch to learn more about exciting opportunities.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
                          View Open Positions
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                          Contact Us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  } catch (error) {
    console.error('Error loading teams:', error);
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
                  We're having trouble loading the teams right now. Please try again later.
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