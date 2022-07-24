import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import Navbar from "./components/sections/navbar/navbar";
import Footer from "./components/sections/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
