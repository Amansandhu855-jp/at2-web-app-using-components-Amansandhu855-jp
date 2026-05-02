import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Regions from "./pages/Regions";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Regions />
      <News />
      <Contact />
      <Footer />
    </>
  );
}

export default App;