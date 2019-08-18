import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import "../styles/layout.css";

const Index = ({ children }) => {
  return (
    <div className="container">
      <Header
        siteTitle={title}
        siteLogo={logo}
        logoText="mgiovani"
        defaultTheme={defaultTheme}
        mainMenu={mainMenu}
        mainMenuItems={showMenuItems}
        menuMoreText={menuMoreText}
      />
      <div className="content">{children}</div>
      <Footer copyrights={copyrights} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
