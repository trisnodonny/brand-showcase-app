import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { customerFetchProducts } from "../stores/actions/actionCreator"
import ProductCard from "../components/ProductCard"
import Loading from "../components/Loading"

export default function ProductsView() {
  const { products, productsLoading } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(customerFetchProducts())

  }, [])
  
  return (
    <>
      {productsLoading && (
        <div className="align-center">
          <Loading />
        </div>
      )} 
      {!productsLoading && (
        <div className="container my-5">
          <div className="d-flex justify-content-evenly flex-wrap">
            {products.map((product) => (
              <ProductCard data={product} key={product?.id} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}