import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Regions from "./pages/Regions";
import News from "./pages/News";
import Contact from "./pages/Contact";
function App() {
    const basename =
    process.env.NODE_ENV === "production"
      ? "/at2-web-app-using-components-Amansandhu855-jp"
      : "/";
  return (
     <BrowserRouter basename={basename}>

      <div id="wrapper">

        <Header />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/regions"
            element={<Regions />}
          />

          <Route
            path="/news"
            element={<News />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;