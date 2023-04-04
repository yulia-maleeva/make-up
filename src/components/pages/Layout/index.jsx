import React from "react";

import Header from "../../organisms/Header";
import CategoriesPanel from "../../organisms/CategoriesPanel";
import Footer from "../../organisms/Footer";

import styled from "styled-components";

const Layout = ({ children }) => (
  <>
    <Header />
    <CategoriesPanel />
    <MainWrapper>{children}</MainWrapper>
    <Footer />
  </>
);

export default Layout;

const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  @media (max-width: 480px) {
    gap: 50px;
  }
`;
