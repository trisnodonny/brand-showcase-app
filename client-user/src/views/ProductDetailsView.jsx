import { useParams } from "react-router-dom"
import { customerFetchProductDetails } from "../stores/actions/actionCreator"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Loading from "../components/Loading"
import Details from "../components/Details"

export default function ProductDetailsView() {
  const { id } = useParams()
  const dispatch = useDispatch()
  
  const { product, productLoading } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(customerFetchProductDetails(id))
  }, [dispatch, id])

  return (
    <>
      {productLoading && (
        <div>
          <Loading />
        </div>
      )} 

      {!productLoading && (
        <Details 
          key={product.id}
          data={product}
        />
      )}
    </>
  )
}