import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;