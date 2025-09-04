import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Product from "./pages/Product";
import Services from "./pages/Services";
import NotFoundPage from "./pages/NotFoundPage";

import Mainlayout from "./Layouts/Mainlayout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
