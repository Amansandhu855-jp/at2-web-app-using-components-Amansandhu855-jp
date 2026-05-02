import React from "react";

function Header() {
  return (
    <header id="header">
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul id="top-buttons">
                <li>
                  <a href="#"><i className="fa fa-sign-in"></i> Login</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-pencil-square-o"></i> Register</a>
                </li>
                <li className="divider"></li>
                <li>
                  <div className="language-switcher">
                    <span><i className="fa fa-globe"></i> English</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="nav-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <a href="#" className="nav-logo">
                <img src="/images/logo.png" alt="One Ring Rentals" />
              </a>

              <nav className="navbar">
                <ul className="nav navbar-nav">
                  <li><a href="#home">Find a Rental</a></li>
                  <li><a href="#">List your rental</a></li>
                  <li><a href="#">Travel Guides</a></li>
                  <li><a href="#regions">Regions</a></li>
                  <li><a href="#news">News</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;