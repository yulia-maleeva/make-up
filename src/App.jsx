import React from "react";

import { Routes, Route } from "react-router-dom";
import ROUTES from "./constants/routes/index";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Product from "./components/pages/Product";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import ShippingAndDelivery from "./components/pages/ShippingAndDelivery";
import FAQ from "./components/pages/FAQ";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Offer from "./components/pages/Offer";
import Checkout from "./components/pages/Checkout";
import ThankYou from "./components/pages/ThankYou";
import NotFound from "./components/pages/NotFound";

const App = () => (
  <>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={`${ROUTES.CATEGORY}:slug`} element={<Products />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={`${ROUTES.PRODUCT}:id`} element={<Product />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.CONTACTS} element={<Contacts />} />
      <Route
        path={ROUTES.SHIPPING_AND_DELIVERY}
        element={<ShippingAndDelivery />}
      />
      <Route path={ROUTES.FAQ} element={<FAQ />} />
      <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
      <Route path={ROUTES.OFFER} element={<Offer />} />
      <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
      <Route path={ROUTES.THANK_YOU} element={<ThankYou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
