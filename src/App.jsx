// import { Routes, Route, HashRouter } from "react-router-dom";
import { Route, HashRouter } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      {/* <Routes> */}
      <HashRouter>
        <Route path="/" element={<HomePage />} />
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/syaratketen" element={<SyaratKetentuanPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </HashRouter>
      {/* </Routes> */}

      <FooterComponent />
    </div>
  )
}

export default App
