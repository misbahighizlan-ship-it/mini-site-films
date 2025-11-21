import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import CookiePopup from "./components/CookiePopup";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>

      <CookiePopup />
    </>
  );
}

export default App;
