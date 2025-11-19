
import './App.css'
import Contact from './Pages/Contact.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
  <BrowserRouter>
   
  <Routes>
  <Route path="/Contact" element={<Contact/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
