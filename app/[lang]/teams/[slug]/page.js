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

import Layout from '../../../../components/layout';
import Link from 'next/link';
import aemHeadlessClient from '../../../../lib/aem-headless-client';
import TeamImage from '../../../../components/TeamImage';

// Force static generation
export const dynamic = 'force-static';
export const revalidate = false;

// Generate static params for all teams
export async function generateStaticParams() {
  try {
    const res = await aemHeadlessClient.getAllTeams();
    const teams = res?.data?.teamList?.items || [];
    
    return teams.map((team) => ({
      slug: team.shortName,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return empty array if there's an error, pages will be generated on-demand
    return [];
  }
}

// Generate metadata for each team page
export async function generateMetadata({ params }) {
  try {
    const res = await aemHeadlessClient.getTeamBySlug(params.slug);
    const team = res?.data?.teamList?.items?.[0];

    if (!team) {
      return {
        title: 'Team Not Found',
        description: 'The requested team could not be found.',
      };
    }

    return {
      title: `${team.title} - Team Details`,
      description: team.description?.plaintext || `Meet the amazing members of ${team.title}`,
      openGraph: {
        title: `${team.title} - Team Details`,
        description: team.description?.plaintext || `Meet the amazing members of ${team.title}`,
        type: 'website',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Team Details',
      description: 'Team information and member details',
    };
  }
}

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



export default async function TeamDetail({ params }) {
  const { slug } = params;

  try {
    const res = await aemHeadlessClient.getTeamBySlug(slug);
    const team = res?.data?.teamList?.items?.[0];

    if (!team) {
      return (
        <Layout>
          <div className="container-fluid bg-light min-vh-100">
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <div className="mb-4">
                    <i className="bi bi-exclamation-circle fs-1 text-warning"></i>
                  </div>
                  <h2 className="display-4 fw-bold text-dark mb-3">Team Not Found</h2>
                  <p className="lead text-muted mb-4">
                    The team you're looking for doesn't exist or has been moved.
                  </p>
                  <Link href="/teams" className="btn btn-primary btn-lg rounded-pill px-4 py-2" prefetch={false}>
                    <i className="bi bi-arrow-left me-2"></i>
                    Back to Teams
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      );
    }

    const teamIndex = 0; // You might want to calculate this based on the team's position

    return (
      <Layout>
        <div className="container-fluid bg-light">
          {/* Hero Section */}
          <section className="py-5 bg-white">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="text-center text-lg-start">
                    <nav aria-label="breadcrumb" className="mb-4">
                      <ol className="breadcrumb justify-content-center justify-content-lg-start">
                        <li className="breadcrumb-item">
                          <Link href="/" className="text-decoration-none">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href="/teams" className="text-decoration-none" prefetch={false}>Teams</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">{team.title}</li>
                      </ol>
                    </nav>
                    
                    <h1 className="display-3 fw-bold text-dark mb-4">
                      {team.title}
                    </h1>
                    
                    <p className="lead text-muted mb-4">
                      {team.description?.plaintext || 'A collaborative team working together to achieve amazing results.'}
                    </p>
                    
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4">
                      <span className="badge bg-primary fs-6 px-4 py-2 rounded-pill">
                        {team.teamMembers?.length || 0} Team Members
                      </span>
                      <span className="badge bg-success fs-6 px-4 py-2 rounded-pill">
                        Active Team
                      </span>
                    </div>
                    
                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                                             <Link href="/teams" className="btn btn-outline-primary btn-lg rounded-pill px-4 py-2" prefetch={false}>
                         <i className="bi bi-arrow-left me-2"></i>
                         Back to Teams
                       </Link>
                      <button className="btn btn-primary btn-lg rounded-pill px-4 py-2">
                        <i className="bi bi-envelope me-2"></i>
                        Contact Team
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-5 mt-lg-0">
                  <div className="position-relative">
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-10 rounded-4" style={{transform: 'rotate(3deg)'}}></div>
                    <TeamImage 
                      src={getTeamFallbackImage(team.title, teamIndex)}
                      alt={`${team.title} team`}
                      className="w-100 rounded-4 shadow-lg position-relative"
                      style={{height: '400px', objectFit: 'cover'}}
                      teamTitle={team.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Members Section */}
          <section className="py-5">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-8 text-center">
                  <h2 className="display-4 fw-bold text-dark mb-3">Meet Our Team</h2>
                  <p className="lead text-muted">
                    Get to know the talented individuals who make this team extraordinary
                  </p>
                </div>
              </div>

              {team.teamMembers && team.teamMembers.length > 0 ? (
                <div className="row g-4">
                  {team.teamMembers.map((member, index) => (
                    <div key={index} className="col-lg-6 col-xl-4">
                      <div className="card border-0 shadow-lg h-100 hover-lift transition-all">
                        <div className="card-body p-4 p-lg-5 text-center">
                          {/* Member Avatar */}
                          <div className="mb-4">
                            <div className={`rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-lg mx-auto`}
                                 style={{
                                   width: '120px',
                                   height: '120px',
                                   fontSize: '2.5rem',
                                   backgroundColor: getFallbackAvatar(member.fullName).includes('bg-') ? 
                                     getFallbackAvatar(member.fullName).replace('bg-', '') : 'primary'
                                 }}>
                              {getInitials(member.fullName)}
                            </div>
                          </div>
                          
                          {/* Member Info */}
                          <h3 className="h4 fw-bold text-dark mb-2">
                            {member.fullName}
                          </h3>
                          
                          {member.occupation && member.occupation.length > 0 && (
                            <div className="mb-4">
                              {member.occupation.map((role, roleIndex) => (
                                <span key={roleIndex} className="badge bg-primary-subtle text-primary fs-6 px-3 py-2 rounded-pill me-2 mb-2">
                                  {role}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <p className="text-muted mb-4">
                            Dedicated team member contributing to our shared success and growth.
                          </p>
                          
                          {/* Contact Info */}
                          <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-outline-primary btn-sm rounded-pill px-3 py-2">
                              <i className="bi bi-envelope me-1"></i>
                              Email
                            </button>
                            <button className="btn btn-outline-info btn-sm rounded-pill px-3 py-2">
                              <i className="bi bi-linkedin me-1"></i>
                              LinkedIn
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="row justify-content-center">
                  <div className="col-lg-6 text-center">
                    <div className="mb-4">
                      <i className="bi bi-people fs-1 text-muted"></i>
                    </div>
                    <h3 className="h4 fw-bold text-dark mb-3">No Team Members Yet</h3>
                    <p className="text-muted">
                      This team is currently being assembled. Check back soon to meet our amazing team members!
                    </p>
                  </div>
                </div>
              )}

              {/* Team Statistics */}
              <div className="row justify-content-center mt-5">
                <div className="col-lg-10">
                  <div className="card bg-gradient-primary text-white border-0 shadow-lg">
                    <div className="card-body p-5">
                      <div className="row text-center">
                        <div className="col-md-4 mb-4 mb-md-0">
                          <div className="h2 fw-bold mb-2">{team.teamMembers?.length || 0}</div>
                          <div className="text-blue-100">Team Members</div>
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                          <div className="h2 fw-bold mb-2">
                            {team.teamMembers ? new Set(team.teamMembers.flatMap(member => member.occupation || [])).size : 0}
                          </div>
                          <div className="text-blue-100">Unique Roles</div>
                        </div>
                        <div className="col-md-4">
                          <div className="h2 fw-bold mb-2">
                            {team.teamMembers?.reduce((total, member) => 
                              total + (member.occupation?.length || 0), 0
                            ) || 0}
                          </div>
                          <div className="text-blue-100">Total Skills</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="row justify-content-center mt-5">
                <div className="col-lg-10">
                  <div className="card bg-primary text-white border-0 shadow-lg">
                    <div className="card-body p-5 text-center">
                      <h3 className="text-3xl font-bold mb-6">
                        Want to Join This Amazing Team?
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
    console.error('Error loading team:', error);
    return (
      <Layout>
        <div className="container-fluid bg-light min-vh-100">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="mb-4">
                  <i className="bi bi-exclamation-triangle fs-1 text-danger"></i>
                </div>
                <h2 className="display-4 fw-bold text-dark mb-3">Oops! Something went wrong</h2>
                <p className="lead text-muted mb-4">
                  We're having trouble loading the team details right now. Please try again later.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <button 
                    onClick={() => window.location.reload()} 
                    className="btn btn-primary btn-lg rounded-pill px-4 py-2"
                  >
                    Try Again
                  </button>
                                     <Link href="/teams" className="btn btn-outline-primary btn-lg rounded-pill px-4 py-2" prefetch={false}>
                     Back to Teams
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
} 