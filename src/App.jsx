import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import HowItWorks from './components/HowItworks'
import Model from './components/Model'
// import MacPart from './components/MacPart'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <>
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      {/* <MacPart /> */}
      <HowItWorks />
      <Footer />
    </main>
    </>
  )
}

export default App
