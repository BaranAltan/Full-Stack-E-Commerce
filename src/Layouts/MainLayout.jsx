import React, { useState } from "react";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import PropTypes from "prop-types";
import Search from "../components/Modals/Search/Search";

const MainLayout = ({ children }) => {

  const [isSearchShow, setIsSearchShow] = useState(false);

  return (
    <>
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}/>
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
