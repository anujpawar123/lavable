import React, { useEffect } from 'react';
import './AuthModal.css';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.37 18.42 22.56 15.6 22.56 12.25Z" fill="white"/>
    <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.14001 18.63 6.71 16.7 5.84 14.1H2.16V16.94C3.99 20.53 7.7 23 12 23Z" fill="white"/>
    <path d="M5.84 14.1C5.62 13.44 5.5 12.74 5.5 12C5.5 11.26 5.62 10.56 5.84 9.9V7.06H2.16C1.43 8.55 1 10.22 1 12C1 13.78 1.43 15.45 2.16 16.94L5.84 14.1Z" fill="white"/>
    <path d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.7 1 3.99 3.47 2.16 7.06L5.84 9.9C6.71 7.3 9.14001 5.38 12 5.38Z" fill="white"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.441 4.868 20.191 8.847 21.503C9.347 21.595 9.529 21.286 9.529 21.026C9.529 20.793 9.52 20.158 9.515 19.308C6.733 19.912 6.146 17.965 6.146 17.965C5.691 16.81 5.034 16.502 5.034 16.502C4.126 15.882 5.103 15.894 5.103 15.894C6.106 15.965 6.634 16.924 6.634 16.924C7.525 18.451 8.973 18.009 9.549 17.751C9.64 17.098 9.901 16.656 10.19 16.406C7.971 16.153 5.637 15.295 5.637 11.492C5.637 10.408 6.024 9.52 6.654 8.835C6.552 8.583 6.214 7.574 6.751 6.208C6.751 6.208 7.581 5.942 9.497 7.239C10.285 7.02 11.144 6.91 12 6.906C12.855 6.91 13.713 7.02 14.503 7.239C16.417 5.942 17.245 6.208 17.245 6.208C17.784 7.574 17.447 8.583 17.345 8.835C17.977 9.52 18.361 10.408 18.361 11.492C18.361 15.303 16.023 16.148 13.795 16.393C14.159 16.708 14.484 17.323 14.484 18.283C14.484 19.658 14.472 20.765 14.472 21.026C14.472 21.29 14.652 21.604 15.16 21.502C19.135 20.187 22 16.44 22 12.017C22 6.484 17.522 2 12 2Z"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.598 12.002C16.598 9.387 18.721 8.118 18.824 8.053C17.457 6.064 15.334 5.761 14.618 5.736C12.894 5.564 11.233 6.757 10.354 6.757C9.475 6.757 8.118 5.761 6.698 5.786C4.845 5.811 3.143 6.865 2.188 8.535C0.245 11.905 1.693 16.892 3.593 19.638C4.523 20.972 5.594 22.463 7.039 22.413C8.434 22.363 8.966 21.523 10.638 21.523C12.311 21.523 12.795 22.413 14.238 22.413C15.731 22.413 16.661 21.047 17.59 19.688C18.675 18.106 19.123 16.558 19.148 16.482C19.098 16.457 16.598 15.526 16.598 12.002ZM11.666 3.844C12.434 2.915 12.946 1.63 12.806 0.345C11.69 0.39 10.325 1.091 9.531 2.016C8.831 2.825 8.214 4.143 8.381 5.405C9.626 5.501 10.898 4.774 11.666 3.844Z"/>
  </svg>
);

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const HeartLogo = () => (
  <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="modal-heart-logo">
    <defs>
      <linearGradient id="lovable-grad-modal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff7a00" />
        <stop offset="50%" stopColor="#ff2a5f" />
        <stop offset="100%" stopColor="#8a2be2" />
      </linearGradient>
    </defs>
    <path d="M4 14C4 8.477 8.477 4 14 4H18C21.313 4 24 6.686 24 10V18C24 21.313 21.313 24 18 24H14C8.477 24 4 19.523 4 14Z" fill="url(#lovable-grad-modal)"/>
  </svg>
);

const AuthModal = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent click inside modal from closing it
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const isLogin = type === 'login';

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-content" onClick={handleModalClick}>
        <button className="auth-modal-close" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <HeartLogo />
        
        <div className="auth-modal-subtitle">Start building.</div>
        <h2 className="auth-modal-title">
          {isLogin ? 'Log in to your account' : 'Create free account'}
        </h2>

        <div className="auth-providers">
          <button className="auth-provider-btn active">
            <span className="auth-provider-icon"><GoogleIcon /></span>
            Continue with Google
            <span className="last-used-badge">Last used</span>
          </button>
          
          <button className="auth-provider-btn">
            <span className="auth-provider-icon"><GitHubIcon /></span>
            Continue with GitHub
          </button>
          
          <button className="auth-provider-btn">
            <span className="auth-provider-icon"><AppleIcon /></span>
            Continue with Apple
          </button>
        </div>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <button className="auth-email-btn">
          Continue with email
        </button>

        {!isLogin && (
          <div className="auth-terms">
            By continuing, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        )}

        <div className="auth-sso">
          <LockIcon />
          <span>SSO available on <a href="#">Business and Enterprise</a> plans.</span>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
