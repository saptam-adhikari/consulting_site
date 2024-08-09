
import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Programs from './component/programs/Programs'
import CardContainer from './component/Cards/CardCotainer'
import Innerpages from './component/Innerpage/Innerpages'
import Features from './component/features/Features'
import Footer from './component/Footer/Footer'



const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Programs/>
   <CardContainer/>
   <Innerpages/>
   <Features/>
   <Footer/>
   </>
  )
}

export default App
