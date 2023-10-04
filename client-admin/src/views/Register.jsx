import { useState } from "react"
import { register } from "../stores/actions/actionCreator"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

function Register() {
  const [ form, setForm ] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  })
  
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      await dispatch(register(form))
      toast(`Register Admin Success`)
      setForm({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      })
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <>
      <form onSubmit={handleRegister}>
        <div className="container w-25">
          <h1 className="text-center mb-5">Register Admin</h1>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input 
              type="text"
              className="form-control"
              onChange={(event) => handleChange(event)}
              name="username"
              value={form.username}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email"
              className="form-control"
              onChange={(event) => handleChange(event)}
              name="email"
              value={form.email}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(event) => handleChange(event)}
              name="password"
              value={form.password}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              onChange={(event) => handleChange(event)}
              name="phoneNumber"
              value={form.phoneNumber}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input 
              type="text"
              className="form-control"
              onChange={(event) => handleChange(event)}
              name="address"
              value={form.address}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  )
}

export default Register