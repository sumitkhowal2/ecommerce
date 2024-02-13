import React from "react";

function Footer() {
  return (
    <div>
      <section className="">
        <footer className="text-center text-lg-start  bg-dark text-white">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a
                href="https://www.facebook.com/sumitkhowal2/"
                className="me-4 text-reset"
              >
                <i className="bi bi-facebook text-warning"></i>
              </a>
              <a
                href="https://twitter.com/Sumitkhowal2/"
                className="me-4 text-reset"
              >
                <i className="bi bi-twitter text-warning"></i>
              </a>
              <a
                href="https://www.google.com/search?sca_esv=600047669&sxsrf=ACQVn08x0sO6_9o8fWIVKGwFPcJt8r0Y4w:1705747656477&q=Sumit+Khowal&stick=H4sIAAAAAAAAAOOwesSozi3w8sc9YSm5SWtOXmOU4BLzSsxLLEl0LkpNLEkNTk0sSs5wTixK4VnEyhNcmptZouCdkV-emAMAocalzjsAAAA&sa=X&ved=2ahUKEwjj3I-Z5euDAxVrSmwGHaY4D8sQnJoFegQIHhAG&biw=1366&bih=637&dpr=1"
                className="me-4 text-reset"
              >
                <i className="bi bi-google text-warning"></i>
              </a>
              <a
                href="https://www.instagram.com/sumitkhowal2/"
                className="me-4 text-reset"
              >
                <i className="bi bi-instagram text-warning"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-khowal-3439b4135/"
                className="me-4 text-reset"
              >
                <i className="bi bi-linkedin text-warning"></i>
              </a>
              <a
                href="https://github.com/sumitkhowal2"
                className="me-4 text-reset"
              >
                <i className="bi bi-github text-warning"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 text-warning">
                    <i className="bi bi-gem me-3"></i>eShop
                  </h6>
                  <p>
                    Welcome to <strong>eShop</strong>, your premier online
                    destination for all your shopping needs! Explore a vast and
                    diverse marketplace where you can discover millions of
                    products spanning every category imaginable.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 text-warning">
                    Make Money with Us
                  </h6>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Sell on eShop
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Sell under eShop Accelerator
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Protect and Build Your Brand
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Amazon Global Selling
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 text-warning">
                    Let Us Help You
                  </h6>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      COVID-19 and Amazon
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Returns center
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset text-decoration-none">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 text-warning">
                    Contact
                  </h6>
                  <p>
                    <i className="bi bi-house me-3 text-warning"></i>
                    Jodhpur, India
                  </p>
                  <p>
                    <i className="bi bi-envelope me-3 text-warning"></i>
                    sumitkhowal2@gmail.com
                  </p>
                  <p>
                    <i className="bi bi-phone me-3 text-warning"></i>
                    +91 9887724031
                  </p>
                  <p>
                    <i className="bi bi-printer me-3 text-warning"></i>
                    +91 9887724031
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2024 Copyright:
            <a
              className="text-reset fw-bold"
              href="https://sumit-khowal-tech-company.business.site//"
            >
              Sumit Khowal Tech Company
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
