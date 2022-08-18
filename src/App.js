import Navbar from "./Components/Navbar"
import Services from "./pages/Services"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import Categories from "./pages/Categories"
import { Route, Routes } from "react-router-dom"
import './Styles/index.css'


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/SignIn" element={<SignIn />} />
         
        </Routes>
      </div>
    </>
  )
}

export default App
