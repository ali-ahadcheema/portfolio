import { useState } from 'react'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Expertise from './expertise'
import Work from './work'
import ContactSection from './email'
function App() {

  return (
    <>
<div className='bg-[#0f1923] w-full min-h-screen'>
<Navbar/>
<div className='pt-13' >
  <Home/>
  <div className='mt-25'>
    <About/>
  </div>
  <div className='mt-25'>
    <Expertise/>
  </div>
  <div className='mt-25'>
    <Work/>
  </div>
  <div className='mt-25'>
<ContactSection/>
  </div>

</div>
</div>
    </>
  )
}

export default App
