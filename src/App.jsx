import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
