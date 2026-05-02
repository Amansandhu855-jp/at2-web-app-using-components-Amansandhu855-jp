import React from "react";

function Contact() {
  return (
    <section id="contact" className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">

            <h1 className="section-title">Contact Us</h1>

            <div className="contact-form">
              <form>
                
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Subject:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message:</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;