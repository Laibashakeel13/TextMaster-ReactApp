import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const navbarClass = props.mode === 'dark' ? 'navbar-dark' : 'navbar-light';
  const { activePage, setActivePage } = props;

  return (
    <nav className={`navbar navbar-expand-lg ${navbarClass}`} style={{ backgroundColor: props.navbarColor }}>
      <div className="container-fluid">
        <Link 
          className="navbar-brand" 
          to="/" 
          onClick={() => setActivePage('home')}
        >
          {props.title}
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link ${activePage === 'home' ? 'active-heading' : ''}`} 
                to="/" 
                onClick={() => setActivePage('home')}
              >
                {props.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${activePage === 'about' ? 'active-heading' : ''}`} 
                to="/about" 
                onClick={() => setActivePage('about')}
              >
                {props.about}
              </Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckCheckedDisabled"
              checked={props.mode === 'dark'}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">
              {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
