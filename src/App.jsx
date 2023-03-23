import React from "react";

import { Routes, Route } from "react-router-dom";
import ROUTES from "./constants/routes/index";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Product from "./components/pages/Product";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import NotFound from "./components/pages/NotFound";

const App = () => (
  <>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={ROUTES.PRODUCT} element={<Product />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.CONTACTS} element={<Contacts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
