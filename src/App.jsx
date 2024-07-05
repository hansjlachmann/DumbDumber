import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Home from "./pages/Home.jsx"
import Roadmap from "./pages/Roadmap.jsx"
import Stake from "./pages/Stake.jsx"
import Burn from "./pages/Burn.jsx"
import Tokenholders from "./pages/Tokenholders.jsx"
import { Route,Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar/> 
      <div className="myclassstyling">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/burn" element={<Burn />} />
          <Route path="/tokenholders" element={<Tokenholders />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
