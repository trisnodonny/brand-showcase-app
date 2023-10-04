import { BASE_URL } from "../config/api"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, editProduct, fetchCategories } from "../stores/actions/actionCreator"
import { toast } from "react-toastify"

export default function Form({ edit, data }) {
  const { id } = useParams()

  const [ form, setForm ] = useState({
    name: data?.name || "",
    description: data?.description || "",
    price: data?.price || "",
    categoryId: data?.categoryId || "",
    mainImg: data?.mainImg || "",
  })

  const [imgUrl, setImgUrl] = useState(["",""])

  const { categories } = useSelector((state) => state?.category)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setForm({
      name: data?.name || "",
      description: data?.description || "",
      price: data?.price || "",
      categoryId: data?.categoryId || "",
      mainImg: data?.mainImg || "",
    })
    if (data?.Images) {
      setImgUrl(data?.Images?.map((i) => i.imgUrl))
    }
    dispatch(fetchCategories())
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
        dispatch(editProduct({...form, imgUrl}, id))
        toast(`Succesfully update product`)
      } else {
        dispatch(addProduct({...form, imgUrl}))
        toast(`Succesfully add product`)
      }
      navigate("/")
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <>
      <div className="w-25 mx-auto">
        <h1 className="text-center">
          { edit ? "Edit Product" : "Create New Product"}
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

          <div className="form-outline mb-4">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="4"
              value={form.description}
              name="description"
              onChange={(event) => handleChange(event)}
            >
            </textarea>
          </div>    

          <div className="form-outline mb-4">
            <label className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              value={form.price}
              name="price"
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="form-outline mb-4">
            <p className="form-label">Category</p>
            <select 
              className="form-select"  
              name="categoryId"
              value={form.categoryId}
              onChange={(event) => handleChange(event)}
            >
              <option 
                value=""
              >
                Select Category
              </option>
              {categories.map((category) => (
                <option 
                  key={category.id} 
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-outline mb-4">
            <label className="form-label">Main Image</label>
            <input
              type="text"
              className="form-control"
              value={form.mainImg}
              name="mainImg"
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div>
            {imgUrl.map((el, index) => (
              <div key={index}>
                <label>Image {index + 1}</label>
                <input
                  type="text"
                  name={"imgUrl" + index}
                  value={el}
                  className="form-control mb-4"
                  onChange={(event) => {
                    const {value} = event.target
                    const newArr = [...imgUrl]
                    newArr[index] = value
                    setImgUrl(newArr)
                  }}
                />
              </div>
            ))}
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