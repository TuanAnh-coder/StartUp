import { Outlet } from "react-router-dom"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import './style/global.css'
import Loading from "./components/Loading/Loading"
import { useState } from "react"
function App() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Loading>
      <Header />
      <Outlet />
      <Footer />
    </Loading>
  )
}

export default App
