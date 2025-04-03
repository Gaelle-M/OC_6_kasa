import { useState } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import logementsData from './data/data.json';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
      <Routes>
          <Route path="/" element={<Home logements={logementsData}/>} /> 
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
