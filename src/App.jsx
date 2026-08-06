import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  const [showNavLogo, setShowNavLogo] = useState(false)

  return (
    <div className="min-h-screen bg-ok-dark overflow-x-hidden">
      <Header showLogo={showNavLogo} />
      <Hero onLogoVisibilityChange={setShowNavLogo} />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
