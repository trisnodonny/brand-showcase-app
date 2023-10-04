import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../config/api";
import { Link } from "react-router-dom";
import Loading from "../components/Loading"
import TableRowProduct from "./TableRowProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, fetchProducts } from "../stores/actions/actionCreator";

export default function TableProduct() {
  // const { data, loading, refetch } = useFetch(`${BASE_URL}/products?_expand=category`)
  const { products, productsLoading } = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())  
  }, [dispatch])

  const handleDelete = async (id) => {
    dispatch(deleteProduct(id))
  }

  return (
    <>
      <h1 className="text-center mb-4">Product List</h1>
      <div className="d-flex justify-content-center w-50">
        <Link
          to="/add-product"
          className="btn btn-success"
        >
          Add Product
        </Link>
      </div>
      <table className="table table-light table-hover w-75 mx-auto text-center mt-4">
        <thead>
          <tr className="mx-auto">
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th className="w-25">Description</th>
            <th>Created By</th>
            <th>Main Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center align-middle">
          {productsLoading ? (
            <tr>
              <td colSpan={9} className="text-center">
                <Loading />
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <TableRowProduct data={product} key={product?.id} index={index} handleDelete={handleDelete}/>
            ))
          )}
          {!productsLoading && !products.length && (
            <tr>
              <td colSpan={9}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}