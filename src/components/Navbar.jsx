import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthModal from './AuthModal';
import './Navbar.css';

const solutionsData = {
  whoIsItFor: [
    { title: "Founders", desc: "Ship before you pitch." },
    { title: "Enterprise", desc: "Startup speed, enterprise grade." },
    { title: "Product managers", desc: "Prototype, don't spec." },
    { title: "Designers", desc: "Your designs, built." },
    { title: "Sales", desc: "Build the demo live." },
    { title: "Marketers", desc: "Launch pages in minutes." },
    { title: "Ops", desc: "Tools that fit your flow." },
    { title: "People", desc: "HR tools your team loves." }
  ],
  useCases: [
    { title: "Prototyping", desc: "Proof of concept in hours." },
    { title: "Internal tools", desc: "Built for your team." }
  ]
};

const resourcesData = {
  resourcesList: [
    { title: "Blog", desc: "Ideas, updates, stories." },
    { title: "Partners", desc: "Build more together." },
    { title: "Templates", desc: "Begin with a template." },
    { title: "Guides", desc: "Learn as you build." },
    { title: "Connectors", desc: "Build from what you already use." },
    { title: "Docs", desc: "Everything under the hood." }
  ],
  announcement: {
    title: "The Lovable mobile app is here",
    linkText: "Learn more >"
  }
};

const DropdownItem = ({ title, desc }) => (
  <div className="dropdown-item">
    <div className="dropdown-item-title">{title}</div>
    <div className="dropdown-item-desc">{desc}</div>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [authModal, setAuthModal] = useState({ isOpen: false, type: 'login' });

  const openLogin = () => {
    setAuthModal({ isOpen: true, type: 'login' });
    setIsMenuOpen(false);
  };

  const openSignup = () => {
    setAuthModal({ isOpen: true, type: 'signup' });
    setIsMenuOpen(false);
  };

  const closeAuthModal = () => {
    setAuthModal({ ...authModal, isOpen: false });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileSubmenu(null);
  };

  const Logo = () => (
    <NavLink to="/" className="nav-left" onClick={closeMenu} style={{textDecoration: 'none'}}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lovable-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7a00" />
            <stop offset="50%" stopColor="#ff2a5f" />
            <stop offset="100%" stopColor="#8a2be2" />
          </linearGradient>
        </defs>
        <path d="M4 14C4 8.477 8.477 4 14 4H18C21.313 4 24 6.686 24 10V18C24 21.313 21.313 24 18 24H14C8.477 24 4 19.523 4 14Z" fill="url(#lovable-grad)"/>
      </svg>
      <span className="logo-text">Lovable</span>
    </NavLink>
  );

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar">
          <Logo />

          <div className="nav-center">
            {/* Solutions Nav Item */}
            <div className="nav-item">
              <NavLink to="/solutions" className="nav-link">
                Solutions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </NavLink>
              
              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-col">
                    <span className="dropdown-heading">Who is it for?</span>
                    <div className="dropdown-grid">
                      {solutionsData.whoIsItFor.map((item, idx) => (
                        <DropdownItem key={idx} title={item.title} desc={item.desc} />
                      ))}
                    </div>
                  </div>
                  <div className="dropdown-col right-col">
                    <span className="dropdown-heading">Use cases</span>
                    <div className="dropdown-list">
                      {solutionsData.useCases.map((item, idx) => (
                        <DropdownItem key={idx} title={item.title} desc={item.desc} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Nav Item */}
            <div className="nav-item">
              <NavLink to="/resources" className="nav-link">
                Resources
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </NavLink>

              <div className="dropdown-menu">
                <div className="dropdown-content">
                  <div className="dropdown-col">
                    <span className="dropdown-heading">Resources</span>
                    <div className="dropdown-grid">
                      {resourcesData.resourcesList.map((item, idx) => (
                        <DropdownItem key={idx} title={item.title} desc={item.desc} />
                      ))}
                    </div>
                  </div>
                  <div className="dropdown-col announcement-col">
                    <span className="dropdown-heading">Announcement</span>
                    <div className="announcement-card">
                      <div className="announcement-image-placeholder">
                        <div className="announcement-image-inner">
                          <div className="mock-app-screen">
                            <span className="mock-app-title">The world needs your ideas</span>
                          </div>
                        </div>
                      </div>
                      <div className="announcement-title">{resourcesData.announcement.title}</div>
                      <div className="announcement-link">{resourcesData.announcement.linkText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/community" className="nav-link">Community</NavLink>
            <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
            <NavLink to="/security" className="nav-link">Security</NavLink>
          </div>

          <div className="nav-right">
            <button className="btn btn-login" onClick={openLogin}>Log in</button>
            <button className="btn btn-start" onClick={openSignup}>Get started</button>
            <button className="menu-icon" onClick={() => setIsMenuOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="14" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {!mobileSubmenu ? (
            <>
              <div className="mobile-menu-header">
                <Logo />
                <div className="nav-right">
                  <button className="btn btn-start" onClick={openSignup}>Get started</button>
                  <button className="menu-icon close-icon" onClick={closeMenu}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mobile-menu-links">
                <div className="mobile-nav-item" onClick={() => setMobileSubmenu('solutions')}>
                  Solutions
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
                <div className="mobile-nav-item" onClick={() => setMobileSubmenu('resources')}>
                  Resources
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
                <NavLink to="/community" className="mobile-nav-link" onClick={closeMenu}>Community</NavLink>
                <NavLink to="/pricing" className="mobile-nav-link" onClick={closeMenu}>Pricing</NavLink>
                <NavLink to="/security" className="mobile-nav-link" onClick={closeMenu}>Security</NavLink>
              </div>

              <div className="mobile-menu-footer">
                <button className="btn btn-login btn-block" onClick={openLogin}>Log in</button>
                <button className="btn btn-start btn-block" onClick={openSignup}>Get started</button>
              </div>
            </>
          ) : (
            // SUBMENU VIEW (Tablet/Mobile)
            <div className="mobile-submenu-view">
              <div className="mobile-submenu-header">
                <button className="back-btn" onClick={() => setMobileSubmenu(null)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  Back
                </button>
                <button className="menu-icon close-icon" onClick={closeMenu}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="mobile-submenu-content">
                {mobileSubmenu === 'solutions' && (
                  <>
                    <span className="mobile-heading">Who is it for?</span>
                    <div className="mobile-list">
                      {solutionsData.whoIsItFor.map((item, idx) => (
                        <DropdownItem key={idx} title={item.title} desc={item.desc} />
                      ))}
                    </div>
                    <hr className="mobile-divider" />
                    <span className="mobile-heading">Use cases</span>
                    <div className="mobile-list">
                      {solutionsData.useCases.map((item, idx) => (
                        <DropdownItem key={idx} title={item.title} desc={item.desc} />
                      ))}
                    </div>
                  </>
                )}

                {mobileSubmenu === 'resources' && (
                  <>
                    <span className="mobile-heading">Resources</span>
                    <div className="mobile-list">
                      {resourcesData.resourcesList.map((item, idx) => (
                        <DropdownItem key={idx} title={item.title} desc={item.desc} />
                      ))}
                    </div>
                    
                    <div className="mobile-announcement-card">
                      <span className="mobile-heading" style={{marginBottom: '1rem'}}>Announcement</span>
                      <div className="announcement-card" style={{padding: '1.25rem', background: '#202020', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)'}}>
                         <div className="announcement-image-placeholder">
                          <div className="announcement-image-inner">
                            <div className="mock-app-screen">
                              <span className="mock-app-title">The world needs your ideas</span>
                            </div>
                          </div>
                        </div>
                        <div className="announcement-title">{resourcesData.announcement.title}</div>
                        <div className="announcement-link">{resourcesData.announcement.linkText}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Authentication Modal */}
      <AuthModal 
        isOpen={authModal.isOpen} 
        type={authModal.type} 
        onClose={closeAuthModal} 
      />
    </>
  );
};

export default Navbar;
