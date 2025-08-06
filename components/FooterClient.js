'use client';

import Link from 'next/link';

export default function FooterClient({ footerData, lang = 'en' }) {
  if (!footerData) return null;

  try {
    const editorProps = {
      "data-aue-resource": `urn:aemconnection:/content/dam/my-project/${lang}/hkex-footer/jcr:content/data/master`,
      "data-aue-type": "reference",
      "data-aue-filter": "cf",
      "data-aue-label": "hkex-footer"
    };

    const {
      data: {
        hkexFooterByPath: {
          item: {
            otherGroupWebsitesTitle,
            otherGroupWebsitesLinkItem = [],
            whatsNewTitle,
            whatsNewLinkItems = [],
            quickLinksTitle,
            quickLinkItems = [],
            contactTitle,
            contactInfo = {},
            followUsTitle,
            socialLinks = [],
            bottomLinks = [],
            copyRightsText
          }
        }
      }
    } = footerData || {};

    // Helper function to get social icon class
    const getSocialIcon = (title) => {
      const iconMap = {
        'facebook': 'bi-facebook',
        'x': 'bi-twitter',
        'LinkedIn': 'bi-linkedin',
        'youtube': 'bi-youtube',
        'instagram': 'bi-instagram',
        'N': 'bi-wechat'
      };
      return iconMap[title?.toLowerCase()] || 'bi-link';
    };

    return (
      <footer className="bg-gray-100" {...editorProps}>
        {/* Main Footer Content */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Other Group Websites */}
              <div className="space-y-4">
                <h4 
                  className="text-lg font-bold text-blue-900"
                  data-aue-prop="otherGroupWebsitesTitle"
                  data-aue-type="text"
                  data-aue-label="Other Group Websites Title"
                >
                  {otherGroupWebsitesTitle}
                </h4>
                <div className="flex-col space-y-3 flex">
                  {otherGroupWebsitesLinkItem?.map((website, index) => (
                    <Link
                      key={`${website.title}-${index}`}
                      href="#"
                      className="inline-block px-4 py-2 border-2 border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-colors duration-200 text-sm font-medium w-fit no-underline"
                      data-aue-resource={`urn:aemconnection:${website._path}/jcr:content/data/master`}
                      data-aue-type="reference"
                      data-aue-filter="cf"
                      data-aue-label={website.title}
                      data-aue-prop="title"
                    >
                      {website.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Vertical Red Separator */}
              <div className="hidden lg:block absolute left-[20%] w-0.5 h-[100%] bg-red-600 transform -translate-x-1/2"></div>

              {/* What's New? */}
              <div className="space-y-4">
                <h4 
                  className="text-lg font-bold text-blue-900"
                  data-aue-prop="whatsNewTitle"
                  data-aue-type="text"
                  data-aue-label="What's New Title"
                >
                  {whatsNewTitle}
                </h4>
                <div className="space-y-2">
                  {whatsNewLinkItems?.map((item, index) => (
                    <Link
                      key={`${item.title}-${index}`}
                      href="#"
                      className="block text-gray-600 hover:text-blue-900 transition-colors duration-200 text-sm no-underline"
                      data-aue-resource={`urn:aemconnection:${item._path}/jcr:content/data/master`}
                      data-aue-type="reference"
                      data-aue-filter="cf"
                      data-aue-label={item.title}
                      data-aue-prop="title"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 
                  className="text-lg font-bold text-blue-900"
                  data-aue-prop="quickLinksTitle"
                  data-aue-type="text"
                  data-aue-label="Quick Links Title"
                >
                  {quickLinksTitle}
                </h4>
                <div className="space-y-2">
                  {quickLinkItems?.map((link, index) => (
                    <Link
                      key={`${link.title}-${index}`}
                      href="#"
                      className="block text-gray-600 hover:text-blue-900 transition-colors duration-200 text-sm"
                      data-aue-resource={`urn:aemconnection:${link._path}/jcr:content/data/master`}
                      data-aue-type="reference"
                      data-aue-filter="cf"
                      data-aue-label={link.title}
                      data-aue-prop="title"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact HKEX */}
              <div className="space-y-4">
                <h4 
                  className="text-lg font-bold text-blue-900"
                  data-aue-prop="contactTitle"
                  data-aue-type="text"
                  data-aue-label="Contact Title"
                >
                  {contactTitle}
                </h4>
                <div 
                  className="space-y-3"
                  data-aue-resource={`urn:aemconnection:${contactInfo._path}/jcr:content/data/master`}
                  data-aue-type="reference"
                  data-aue-filter="cf"
                  data-aue-label="contact-info"
                >
                  <div>
                    <div 
                      className="text-gray-600 text-sm leading-relaxed"
                      data-aue-prop="address.html"
                      data-aue-type="richtext"
                      data-aue-label="Contact Address"
                      dangerouslySetInnerHTML={{ __html: contactInfo?.address?.html || '' }}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="bi bi-telephone text-gray-600"></i>
                    <span 
                      className="text-gray-600 text-sm"
                      data-aue-prop="phoneNumber"
                      data-aue-type="text"
                      data-aue-label="Phone Number"
                    >
                      {contactInfo?.phoneNumber}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="bi bi-envelope text-gray-600"></i>
                    <Link
                      href={`mailto:${contactInfo?.email}`}
                      className="text-blue-900 underline text-sm hover:text-blue-700 transition-colors duration-200"
                      data-aue-prop="email"
                      data-aue-type="text"
                      data-aue-label="Email Address"
                    >
                      {contactInfo?.email}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us and Contact Us Section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                <div className="flex items-center space-x-4">
                  <span 
                    className="text-blue-900 font-bold text-sm"
                    data-aue-prop="followUsTitle"
                    data-aue-type="text"
                    data-aue-label="Follow Us Title"
                  >
                    {followUsTitle}
                  </span>
                  <div className="flex space-x-3">
                    {socialLinks?.map((social, index) => (
                      <a
                        key={`${social.title}-${index}`}
                        href="#"
                        className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-900 hover:text-blue-900 transition-colors duration-200"
                        aria-label={social.title}
                        data-aue-resource={`urn:aemconnection:${social._path}/jcr:content/data/master`}
                        data-aue-type="reference"
                        data-aue-filter="cf"
                        data-aue-label={social.title}
                        data-aue-prop="title"
                      >
                        <i className={`${getSocialIcon(social.title)} text-sm text-gray-500`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                {contactInfo?.ctaLabel && (
                  <button 
                    className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 text-sm font-medium"
                    data-aue-prop="ctaLabel"
                    data-aue-type="text"
                    data-aue-label="Contact CTA"
                  >
                    {contactInfo.ctaLabel}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-gray-200 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-6 text-sm">
                {bottomLinks?.map((link, index) => (
                  <Link
                    key={`${link.title}-${index}`}
                    href="#"
                    className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
                    data-aue-resource={`urn:aemconnection:${link._path}/jcr:content/data/master`}
                    data-aue-type="reference"
                    data-aue-filter="cf"
                    data-aue-label={link.title}
                    data-aue-prop="title"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <div 
                className="text-sm text-gray-600"
                data-aue-prop="copyRightsText"
                data-aue-type="text"
                data-aue-label="Copyright Text"
              >
                {copyRightsText}
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