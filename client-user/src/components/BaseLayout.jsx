import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function BaseLayout () {
  return (
    <>
    <div
      style={{backgroundColor: "#faf9f8"}}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    </>
  )
}