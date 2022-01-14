import React from "react";
import '../../styles/Navbar.css'
import { AiTwotoneContacts } from 'react-icons/ai';
import { FcPhotoReel } from 'react-icons/fc';
import { BsFillPersonBadgeFill } from 'react-icons/bs';
import { FcGallery } from 'react-icons/fc';

export const Navbar = () => {
    return (
        <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="/" className="nav-link">
              <span className="link-text logo-text">Facu <br/>Fotos</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </a>
          </li>
    
          <li className="nav-item">
            <a href="/#abotme" className="nav-link">
            <BsFillPersonBadgeFill/>
              <span className="link-text">Sobre mi</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a href="/#workstyle" className="nav-link">
              <FcPhotoReel/>
              <span className="link-text">Mi trabajo</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a href="/#contact" className="nav-link">
              <AiTwotoneContacts/>
              <span className="link-text">Contacto</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a href="/albums" className="nav-link">
              <FcGallery/>
              <span className="link-text">Mis albums</span>
            </a>
          </li>   
          
        </ul>
      </nav>
    )
}