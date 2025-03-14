import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className='home'>
        < Navigation />
        <div className="container-title">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>

        <div className="container-card"></div>
        < Footer />
    </div>
  )
}

export default Home
  