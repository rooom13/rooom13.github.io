import React from 'react';
import styled from 'styled-components'

import '../App.css';
import ProfilePic from '../images/profile.png'

function SideNavbar() {
  return (


    <Sidebar id="sidebar" className="sidebar-wrapper">
      <div className="sidebar-content">
        <div id="close-sidebar" >
          <a href="#">-.- </a>
          <div >
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="sidebar-header">
          <div className="user-pic">
            <img className="img-responsive img-rounded" src={ProfilePic} />
          </div>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li className="header-menu">
              <span>General</span>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="fa "></i>
                <span>CV</span>
              </a>
            </li>
            <li className="sidebar-dropdown">
              <a href="#Two">
                <i className="fa"></i>
                <span>Projects  </span>
              </a>
              <div className="sidebar-submenu">
              </div>
            </li>
            <li className="header-menu">
              <span>Projects</span>
            </li>
            <li>
              <a href="#">
                <i className="fa"></i>
                <span>DailyWord bot</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa"></i>
                <span>Project 2</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa"></i>
                <span>Project 3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </Sidebar>

  );
}

const Sidebar = styled.nav`
  

`

export default SideNavbar;
