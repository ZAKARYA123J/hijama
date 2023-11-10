import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BiLogoGmail} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import {FaLocationArrow} from 'react-icons/fa'
import Login from './logine';
import WhatsAppButton from './wtsap';
function Nvbar() {
  return (
    <>
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/reserve'} className="nav-link" href="#">
              احجز
الآن
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={Login} to={"/logine"}  className="nav-link" href="#">
              موقع<FaLocationArrow/>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <WhatsAppButton/> 
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <div className="dropdown">
         
              <ul >
                  <a className="dropdown-item" href="#">
                    naima.maira.com <BiLogoGmail/>
                  </a>
               
              </ul>
            </div>
            <div className="dropdown">
          
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nvbar;
