import React from "react";

const MainFooter = () => {
  return (
    <>
      <footer className="bg-light text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-primary btn-floating m-1"
              style={{ "background-color": "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f" />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ "background-color": "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter" />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ "background-color": "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google" />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ "background-color": "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram" />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ "background-color": "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in" />
            </a>

            <a
              className="btn btn-primary btn-floating m-1"
              style={{ "background-color": "#333333" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github" />
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
