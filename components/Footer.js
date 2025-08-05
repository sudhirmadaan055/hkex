'use client';

import Link from 'next/link';

export default function Footer() {
  try {
    const groupWebsites = [
      { name: 'LME', href: '#' },
      { name: 'QME', href: '#' },
      { name: 'Bond Connect', href: '#' }
    ];

    const whatsNew = [
      { name: '2024 Annual Report', href: '#' },
      { name: '2024 Sustainability Report', href: '#' },
      { name: 'HKEX insight', href: '#' }
    ];

    const quickLinks = [
      { name: 'HKEX Foundation', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Careers at HKEX', href: '#' }
    ];

    const socialLinks = [
      { name: 'Facebook', href: '#', icon: 'bi-facebook' },
      { name: 'Twitter', href: '#', icon: 'bi-twitter' },
      { name: 'LinkedIn', href: '#', icon: 'bi-linkedin' },
      { name: 'YouTube', href: '#', icon: 'bi-youtube' },
      { name: 'Instagram', href: '#', icon: 'bi-instagram' },
      { name: 'WeChat', href: '#', icon: 'bi-wechat' }
    ];

    const bottomLinks = [
      { name: 'Site Map', href: '#' },
      { name: 'Disclaimer', href: '#' },
      { name: 'Hyperlink Policy', href: '#' },
      { name: 'Privacy Notice', href: '#' },
      { name: 'Cookie Notice', href: '#' }
    ];

    return (
      <footer className="bg-gray-100">
        {/* Main Footer Content */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Other Group Websites */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-blue-900">Other Group Websites</h4>
                <div className="flex-col space-y-3 flex">
                  {groupWebsites.map((website) => (
                    <Link
                      key={website.name}
                      href={website.href}
                      className="inline-block px-4 py-2 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-200 text-sm font-medium inline-block px-4 py-2 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-200 text-sm font-medium w-fit no-underline"

                    >
                      {website.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Vertical Red Separator */}
              <div className="hidden lg:block absolute left-[20%] w-0.5 h-[100%] bg-red-600 transform -translate-x-1/2"></div>

              {/* What's New? */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-blue-900">What's New?</h4>
                <div className="space-y-2">
                  {whatsNew.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-900 transition-colors duration-200 text-sm no-underline"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-blue-900">Quick Links</h4>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-gray-600 hover:text-blue-900 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact HKEX */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-blue-900">Contact HKEX</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-gray-700 text-sm mb-1">Registered Office:</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      8/F, Two Exchange Square, 8<br />
                      Connaught Place, Central, Hong Kong
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="bi bi-telephone text-gray-600"></i>
                    <span className="text-gray-600 text-sm">+852 2522 1122</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="bi bi-envelope text-gray-600"></i>
                    <Link
                      href="mailto:info@hkex.com.hk"
                      className="text-blue-900 underline text-sm hover:text-blue-700 transition-colors duration-200"
                    >
                      info@hkex.com.hk
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us and Contact Us Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-4">
                  <span className="text-blue-900 font-bold text-sm">Follow Us:</span>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-900 hover:text-blue-900 transition-colors duration-200"
                        aria-label={social.name}
                      >
                        <i className={`${social.icon} text-sm text-gray-500`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 text-sm font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gray-200 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-6 text-sm">
                {bottomLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                ©2016-25 Hong Kong Exchanges and Clearing Limited. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Error rendering footer:', error);
    return (
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-gray-600">©2016-25 Hong Kong Exchanges and Clearing Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
} 