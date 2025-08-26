import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './views/home/Home'
import './App.css'
import { Navbar } from './components/nav/NavbarComponent'
import { Footer } from './components/footer/Footer'
import { Photos } from './views/photos/Photos'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/photos" element={<Photos />} /> */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
