import Link from 'next/link';
import aemHeadlessClient from '../lib/aem-headless-client';

export default async function Header() {
  const res = await aemHeadlessClient.getData('hkex-header', ';cfPath=/content/dam/my-project/en/hkex-header');
  const headerData = res?.data?.hkexHeaderByPath?.item || [];


  if (!headerData) return null;

  const logo = {
    src: 'https://www.hkexgroup.com/Group/home/media_20250707180029/HKEX%2025A%20Logo%20%20Group%20%20Market%20Mono.png?_20250221T100123Z',
    href: '/',
    alt: headerData?.logoAltText || 'HKEX Logo',
  };

  const navLinks = headerData?.mainNavigation || [];

  const icons = [
    { src: '/notification.svg', alt: 'Notification Icon', href: '/notifications' },
    { src: '/search.svg', alt: 'Search Icon', href: '/search' },
  ];

  return (
    <nav className="navbar navbar-expand-lg p-4 navbar-light bg-black text-white sticky-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="header-left" href={logo.href} style={{ maxWidth: '215px' }}>
          <img src={logo.src} alt={logo.alt} />
        </Link>

        {/* Mobile Toggle */}
        {/* <button className="btn btn-outline-light d-sm-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </button> */}

        {/* Desktop Nav */}
        <div className="d-none d-sm-flex align-items-center px-4">
          <ul className="navbar-nav m-0 d-flex justify-content-between align-items-center gap-2">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={`text-white nav-link`}
                  href="#"
                  style={{whiteSpace: 'nowrap'}}
                >
                  {link.mainNavItemLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons */}
        <div className="header-right d-none d-sm-flex align-items-center gap-4">
          {icons.map((icon) => (
            <Link key={icon.alt} href={icon.href} className="icon-link">
              <img src={icon.src} alt={icon.alt} />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      {/* {menuOpen && (
        <div className="d-sm-none p-3">
          {navLinks.map((link, index) => (
            <div key={index} className="py-1">
              <Link
                className={`text-white ${isActive(link.mainNavItemLink._path) ? 'text-warning' : ''}`}
                href={link.mainNavItemLink._path}
              >
                {link.mainNavItemLabel}
              </Link>
            </div>
          ))}
          <div className="d-flex gap-4 mt-3">
            {icons.map((icon) => (
              <Link key={icon.alt} href={icon.href}>
                <img src={icon.src} alt={icon.alt} height="20" />
              </Link>
            ))}
          </div>
        </div>
      )} */}
    </nav>
  );
}