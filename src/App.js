import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Contact from "./components/Contact";
import Products from "./components/Products";
import SingleDetail from "./components/SingleDetail";
const App = () => {
  const theme = {
    responsive: {
      mobile: "768px",
      tab: "998px",
    },
    // color: {
    //   blue1: "#183A1D",
    //   blue2: "#F0A04B",
    //   grey: "#E1EEDD",
    // },
    // color: {
    //   blue1: "#EB6440",
    //   blue2: "#497174",
    //   grey: "#D6E4E5",
    // },
    // color: {
    //   blue1: "#2C3333",
    //   blue2: "#395B64",
    //   grey: "#A5C9CA",
    // },
    // color: {
    //   blue1: "#181823",
    //   blue2: "#060047",
    //   grey: "#E8E2E2",
    // },
    color: {
      blue1: "#222831",
      blue2: "#FD7014",
      grey: "#EEEEEE",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleProduct/:id" element={<SingleDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
