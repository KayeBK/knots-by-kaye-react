import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Updates from "./pages/updates";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import reportWebVitals from './reportWebVitals';
import './index.css';

export default function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="updates" element={<Updates />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

reportWebVitals();
