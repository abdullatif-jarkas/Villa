import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import Properties from './pages/Properties/Properties'
import PropertyDetails from './pages/PropertyDetails/PropertyDetails'
import ContactUs from './pages/ContactUs/ContactUs'
import NavBar from "./components/common/NavBar/NavBar"
import Footer from "./components/common/Footer/Footer"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/properties" element={<Properties />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
