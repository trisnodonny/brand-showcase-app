import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
export default function BaseLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  )   
}  
