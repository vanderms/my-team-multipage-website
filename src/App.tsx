import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import Navbar from "./components/sections/navbar/navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
