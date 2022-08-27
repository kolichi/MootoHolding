import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer.jsx"
import Services from "./pages/Services"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Tracking from "./pages/Tracking"
import { Route, Routes } from "react-router-dom"
import './Styles/index.css'




function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tracking" element={<Tracking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
