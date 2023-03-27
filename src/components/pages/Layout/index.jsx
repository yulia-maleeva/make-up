import React from "react";

import Header from "../../organisms/Header";
import CategoriesPanel from "../../organisms/CategoriesPanel";
import Footer from "../../organisms/Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <CategoriesPanel />
    {children}
    <Footer />
  </>
);

export default Layout;
