import React from "react";

// import st from "../styles/style.css";
import Layout from "../components/layout"
import { Link } from "gatsby";
import SEO from "../components/seo";
const iframeStyle = {
  position: 'fixed', top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%', border: 'none', margin: '0', padding: '0', overflow: 'hidden',
}
const Home = () => {
  return (
    <div>
      <SEO title="Home" />
      <iframe src="https://mgiovani.github.io" style={iframeStyle}></iframe>
      {/*{} 
      <nav className={[st.navbar, st.navbarExpandLg, st.fixedTop, st.customNav, st.sticky].join(' ')}>
        <div className="container">
          <button className={st.navbarToggler} type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i className="mdi mdi-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="home-bg section h-100vh" id="home">
        <div className="bg-overlay"></div>
        <div className="home-table">
          <div className="home-table-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="text-white text-center">
                    <h4>Hello & Welcome</h4>
                    <h1 className="header_title mb-0 mt-3">I Am <span className="element font-weight-bold" data-elements="Giovani Moutinho.,A Developer."></span></h1>
                    <p className="text-white mx-auto header_subtitle mt-4"></p>
                    <div className="header_btn">
                      <a href="" className="btn btn-outline-custom btn-rounded mt-4 social-icon"><i className="mdi mdi-github-circle"></i></a>
                      <a href="" className="btn btn-outline-custom btn-rounded mt-4 social-icon"><i className="mdi mdi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div >
  );
};

export default Home;