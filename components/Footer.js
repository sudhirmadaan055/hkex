"use client";

import Link from "next/link";

export const footerData = {
  otherGroupWebsites: ["LME", "QME", "Bond Connect"],
  whatsNew: [
    { label: "2024 Annual Report", href: "#" },
    { label: "2024 Sustainability Report", href: "#" },
    { label: "HKEX insight", href: "#" },
  ],
  quickLinks: [
    { label: "HKEX Foundation", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Careers at HKEX", href: "#" },
  ],
  contactInfo: {
    address: [
      "8/F, Two Exchange Square, 8",
      "Connaught Place, Central, Hong Kong",
    ],
    phone: "+852 2522 1122",
    email: "info@hkex.com.hk",
  },
  socialLinks: [
    { name: 'facebook', href: '#', icon: 'bi-facebook' },
    { name: 'twitter', href: '#', icon: 'bi-twitter' },
    { name: 'linkedin', href: '#', icon: 'bi-linkedin' },
    { name: 'youtube', href: '#', icon: 'bi-youtube' },
    { name: 'insta', href: '#', icon: 'bi-instagram' },
    { name: 'notion', href: '#', icon: 'bi-wechat' }
  ],
  footerLinks: [
    "Site Map",
    "Disclaimer",
    "Hyperlink Policy",
    "Privacy Notice",
    "Cookie Notice",
  ],
  copyright:
    "©2016-25 Hong Kong Exchanges and Clearing Limited. All rights reserved.",
};

export default function Footer() {
  const {
    otherGroupWebsites,
    whatsNew,
    quickLinks,
    contactInfo,
    socialLinks,
    footerLinks,
    copyright,
  } = footerData;

  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Other Group Websites */}
          <div className="space-y-4 pr-8 border-r border-red-500">
            <h3 className="text-blue-900 font-bold text-lg">
              Other Group Websites
            </h3>
            <div className="space-y-2">
              {otherGroupWebsites.map((item, index) => (
                <button
                  key={index}
                  className="w-auto d-block px-4 py-2 font-bold border-1 border-blue-900 rounded-full text-blue-900 hover:bg-blue-50 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* What's New */}
          <div className="space-y-4">
            <h3 className="text-blue-900 font-bold text-lg">What's New?</h3>
            <div className="space-y-2">
              {whatsNew.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-blue-900 font-bold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-blue-900 font-bold text-lg">Contact HKEX</h3>
            <div className="space-y-2 text-gray-700">
              <p className="font-medium">Registered Office:</p>
              {contactInfo.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <div className="flex items-center space-x-2 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="24"
                  viewBox="0 0 15 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_5074)">
                    <path
                      d="M1.59772 24C1.14788 24 0.775595 23.8464 0.465357 23.5393C0.155119 23.2322 0 22.8637 0 22.4184V1.58157C0 1.13628 0.155119 0.752399 0.465357 0.460653C0.775595 0.153551 1.14788 0 1.59772 0H13.4023C13.8521 0 14.2244 0.153551 14.5346 0.460653C14.8449 0.767754 15 1.13628 15 1.58157V22.4184C15 22.8637 14.8449 23.2322 14.5346 23.5393C14.2244 23.8464 13.8521 24 13.4023 24H1.59772ZM0.57394 18.0729V22.4184C0.57394 22.6795 0.682523 22.9098 0.89969 23.1248C1.11686 23.3397 1.34953 23.4472 1.61324 23.4472H13.4023C13.666 23.4472 13.8987 23.3397 14.1158 23.1248C14.333 22.9098 14.4416 22.6795 14.4416 22.4184V18.0729H0.558428H0.57394ZM7.49224 21.5125C7.6939 21.5125 7.86453 21.4357 8.01965 21.2821C8.17477 21.1286 8.25233 20.9597 8.25233 20.7601C8.25233 20.5605 8.17477 20.3916 8.01965 20.238C7.86453 20.0845 7.6939 20.0077 7.49224 20.0077C7.29059 20.0077 7.11996 20.0845 6.96484 20.238C6.80972 20.3916 6.73216 20.5605 6.73216 20.7601C6.73216 20.9597 6.80972 21.1286 6.96484 21.2821C7.11996 21.4357 7.29059 21.5125 7.49224 21.5125ZM0.558428 17.5048H14.4261V3.51631H0.558428V17.4894V17.5048ZM0.558428 2.96353H14.4261V1.58157C14.4261 1.32054 14.3175 1.09021 14.1003 0.87524C13.8831 0.660269 13.6505 0.552783 13.3868 0.552783H1.59772C1.33402 0.552783 1.10134 0.660269 0.884178 0.87524C0.667011 1.09021 0.558428 1.32054 0.558428 1.58157V2.96353ZM0.558428 2.96353V0.552783V2.94818V2.96353Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_5074">
                      <rect width="15" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_5079)">
                    <path
                      d="M1.48368 13.4118C1.04405 13.4118 0.700595 13.2753 0.412092 12.9888C0.137327 12.7159 -0.0137939 12.3612 -0.0137939 11.9246V1.47352C-0.0137939 1.03692 0.123589 0.695829 0.412092 0.409311C0.686857 0.136437 1.04405 0 1.48368 0H17.5162C17.9558 0 18.2993 0.136437 18.5878 0.422955C18.8626 0.695829 19.0137 1.05057 19.0137 1.48716V11.9519C19.0137 12.3885 18.8763 12.7296 18.5878 13.0161C18.313 13.289 17.9558 13.4254 17.5162 13.4254H1.48368V13.4118ZM9.49308 6.75363L0.576951 1.33708V11.9382C0.576951 12.1975 0.65938 12.4158 0.837978 12.5931C1.01657 12.7705 1.22265 12.8524 1.49741 12.8524H17.53C17.791 12.8524 18.0108 12.7705 18.1894 12.5931C18.368 12.4158 18.4504 12.2111 18.4504 11.9382V1.33708L9.52055 6.76728L9.49308 6.75363ZM9.49308 5.6485L17.9696 0.573036H1.03031L9.50681 5.66214L9.49308 5.6485ZM0.576951 1.33708V0.573036V11.9382C0.576951 12.1975 0.65938 12.4158 0.837978 12.5931C1.01657 12.7705 1.22265 12.8524 1.49741 12.8524H0.576951V1.33708Z"
                      fill="#0B253B"
                    />
                    <path
                      d="M1.48368 13.4118C1.04405 13.4118 0.700595 13.2753 0.412092 12.9888C0.137327 12.7159 -0.0137939 12.3612 -0.0137939 11.9246V1.47352C-0.0137939 1.03692 0.123589 0.695829 0.412092 0.409311C0.686857 0.136437 1.04405 0 1.48368 0H17.5162C17.9558 0 18.2993 0.136437 18.5878 0.422955C18.8626 0.695829 19.0137 1.05057 19.0137 1.48716V11.9519C19.0137 12.3885 18.8763 12.7296 18.5878 13.0161C18.313 13.289 17.9558 13.4254 17.5162 13.4254H1.48368V13.4118ZM9.49308 6.75363L0.576951 1.33708V11.9382C0.576951 12.1975 0.65938 12.4158 0.837978 12.5931C1.01657 12.7705 1.22265 12.8524 1.49741 12.8524H17.53C17.791 12.8524 18.0108 12.7705 18.1894 12.5931C18.368 12.4158 18.4504 12.2111 18.4504 11.9382V1.33708L9.52055 6.76728L9.49308 6.75363ZM9.49308 5.6485L17.9696 0.573036H1.03031L9.50681 5.66214L9.49308 5.6485ZM0.576951 1.33708V0.573036V11.9382C0.576951 12.1975 0.65938 12.4158 0.837978 12.5931C1.01657 12.7705 1.22265 12.8524 1.49741 12.8524H0.576951V1.33708Z"
                      fill="black"
                      fill-opacity="0.2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_5079">
                      <rect width="19" height="13.4118" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {contactInfo.email}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us & Contact Button */}
        <div className="flex flex-col md:flex-row justify-end items-center mt-8 pt-6 gap-10">
          <div className="flex items-center space-x-4 md:mb-0">
            <span
              className="text-blue-900 font-bold"
              style={{ color: "#0B253B", fontSize: "20px" }}
            >
              Follow Us:
            </span>
            <div className="flex space-x-3">
               {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-8 h-8  flex items-center justify-center hover:border-blue-900 hover:text-blue-900 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <img src={`/${social.name}.svg`}></img>
                      {/* <i className={`${social.icon} text-sm text-gray-500`}></i> */}
                    </a>
                  ))}
            </div>
          </div>
          <button
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            style={{ backgroundColor: "#14436B", borderRadius: "48px" }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Footer Nav & Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-wrap space-x-6">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href="#"
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">

        <div className=" text-gray-700  border-gray-200 ">
          {copyright}
        </div>
        </div>
      </div>
    </footer>
  );
}
