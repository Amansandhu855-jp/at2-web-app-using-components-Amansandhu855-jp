import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Regions from "./pages/Regions";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="wrapper">
      <Header />

      <Home />
      <Regions />
      <News />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;