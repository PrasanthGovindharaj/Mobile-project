import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./page/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Personalize from "./components/Personalize/Personalize1/Personalize";
import PersonalizeName from "./components/Personalize/Personalize2/PersonalizeName";
import CallbackForm from "./components/CallbackForm/CallbackForm";
import About from "./components/about/About";
import Tample from "./components/Tample/Tample";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tample" element={<Tample />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personalize" element={<Personalize />} />
          <Route path="/personalizename" element={<PersonalizeName />} />
          <Route path="/callbackform" element={<CallbackForm />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
