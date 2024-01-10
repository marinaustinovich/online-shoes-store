import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "../footer";
import { Header } from "../header";
import MainPage from "pages/main-page/main-page";
import AboutPage from "pages/about-page/about-page";
import ContactsPage from "pages/contacts-page/contacts-page";
import CatalogPage from "pages/catalog-page/catalog-page";
import ProductPage from "pages/product-page/product-page";
import ErrorPage from "pages/404-page/404-page";
import { Column, Wrapper } from "components/common";
import { Banner } from "../banner";
import CartPage from "pages/cart-page/cart-page";

export const App = () => (
  <>
    <Header />

    <main className="container">
      <Wrapper>
        <Column>
          <Banner />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/catalog/" element={<CatalogPage />} />
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/contacts/" element={<ContactsPage />} />
            <Route path="/cart/" element={<CartPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/404-page/" element={<ErrorPage />} />
          </Routes>
        </Column>
      </Wrapper>
    </main>

    <Footer />
  </>
);
