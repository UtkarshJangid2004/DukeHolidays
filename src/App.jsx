import React from 'react'
import Nav from './Components/Nav/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Offers from './Components/Offers/Offers'
import CountryPage from './Components/Encyclopedia/CountryPage'
import Contact from './Components/Contact/Contact'
import Vlogs from './Components/Vlogs/Vlogs'
import Try from './Components/Try/Try'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="mt-[6%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/encyclopedia/:countryId" element={<CountryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vlogs" element={<Vlogs />} />
        </Routes>
        <Footer />
      </div>
    </div>
    // <><Try/></>
  )
}

export default App