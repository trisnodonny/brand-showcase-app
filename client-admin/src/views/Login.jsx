import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [ form, setForm ] = useState({
    email: "",
    password: ""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      await dispatch(login(form))
      toast(`Login Success`)
      navigate("/")
    } catch (err) {
      toast.error(err.message)
    }
  }

  return(
    <>
      <div 
        className="mt-5"
        style={{display:'flex', justifyContent: 'center'}}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
          alt="" 
          style={{width : 200}}
          />
      </div>
      <form 
        onSubmit={handleLogin}
        className="w-25 mx-auto my-5">
      <h1 className="text-center">Admin Login</h1>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input  
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => handleChange(event)}
          />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={form.password}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label">Check me out</label>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </>
  )
}