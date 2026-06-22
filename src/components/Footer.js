import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-top" className="container">
        <div className="row">
          <div className="block col-sm-3">
            <a href="#">
              <img src="public/images/logo.png" alt="One Ring Rentals" />
            </a>
            <br />
            <br />
            <p>
              One Ring Rentals provides holiday rental listings across Middle
              Earth, helping visitors find suitable places to stay.
            </p>
          </div>

          <div className="block col-sm-3">
            <h3>Helpful Links</h3>
            <ul className="footer-links">
              <li><a href="#">All rentals</a></li>
              <li><a href="#">List your rental</a></li>
              <li><a href="#">Read our FAQs</a></li>
            </ul>
          </div>

          <div className="block col-sm-6">
            <h3>Popular regions</h3>
            <div className="row">
              <div className="col-sm-6">
                <ul className="footer-listings">
                  <li><p><a href="#">Rhovanion</a></p></li>
                  <li><p><a href="#">Eriador</a></p></li>
                  <li><p><a href="#">Bay of Belfalas</a></p></li>
                </ul>
              </div>

              <div className="col-sm-6">
                <ul className="footer-listings">
                  <li><p><a href="#">Mordor</a></p></li>
                  <li><p><a href="#">Arnor</a></p></li>
                  <li><p><a href="#">Forlindon</a></p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              © 2026 One Ring Rentals

              <ul className="social-networks">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google"></i></a></li>
                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;