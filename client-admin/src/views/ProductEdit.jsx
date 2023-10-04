import Form from "../components/Form"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductById } from "../stores/actions/actionCreator"

function ProductEdit() {
  const { id } = useParams()
  const { product, productsLoading } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductById(id))  
  }, [])

  return(
    <>
      {product && (
        <Form edit data={product}/>
      )}
    </>
  )
}

export default ProductEdit