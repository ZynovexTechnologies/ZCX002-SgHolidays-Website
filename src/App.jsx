import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CTAButtons from "./components/CTAButtons.jsx";
import Seo from "./components/Seo.jsx";
import Home from "./pages/Home.jsx";
import Resort from "./pages/Resort.jsx";
import Safari from "./pages/Safari.jsx";
import Packages from "./pages/Packages.jsx";
import Contact from "./pages/Contact.jsx";
import { getPageSeo } from "./data/seo.js";

function AppLayout() {
  const location = useLocation();
  const seo = getPageSeo(location.pathname, window.location.origin);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Seo {...seo} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resort" element={<Resort />} />
        <Route path="/safari" element={<Safari />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <CTAButtons />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
