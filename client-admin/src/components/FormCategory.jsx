import { BASE_URL } from "../config/api"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addCategory, editCategory } from "../stores/actions/actionCreator"
import { toast } from "react-toastify"

export default function FormCategory({ edit, data }) {
  const { id } = useParams()

  const [ form, setForm ] = useState({
    name: ""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setForm({
      name: data?.name || ""
    })
  }, [data])

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (edit) {
        await dispatch(editCategory(form, id))
        toast(`Succesfully update category`)
      } else {
        await dispatch(addCategory(form))
        toast(`Succesfully add category`)
      }
      navigate("/category")
    } catch (err) {
      toast.error(err.message)
    }
  }
  // const handelSubmit = async (event) => {
  //   event.preventDefault()
  //   try {
  //      const response = await fetch(`${BASE_URL}/categories`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(form)
  //      })
  //      navigate("/category")
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <>
      <div className="w-25 mx-auto">
        <h1 className="text-center">
          { edit ? "Edit Category" : "Add New Category" }
        </h1>
        <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <label className="form-label">Name</label>
          <input 
            type="text"
            className="form-control"
            value={form.name}
            name="name"
            onChange={(event) => handleChange(event)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
        >
          Submit
        </button>
        </form>
      </div>
    </>
  )
}