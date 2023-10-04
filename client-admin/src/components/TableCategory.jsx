import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../config/api";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import TableRowCategory from "./TableRowCategory"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, fetchCategories } from "../stores/actions/actionCreator";

export default function TableCategory() {
  // const { data, loading, refetch } = useFetch(`${BASE_URL}/categories`)
  const { categories, categoriesLoading } = useSelector((state) => state.category)   
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const handleDelete = async (id) => {
    dispatch(deleteCategory(id))
  }

  return (
    <>
      <h1 className="text-center mb-4">Category List</h1>
      <div className="d-flex justify-content-center w-50">
        <Link to="/add-category" className="btn btn-success">
          Add Category
        </Link>
      </div>
      <table className="table table-light table-hover w-75 mx-auto text-center mt-4">
        <thead>
            <tr className="mx-auto">
              <th>#</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody className="text-center align-middle">
          {categoriesLoading ? (
            <tr>
              <td colSpan={9} className="text-center"> 
                <Loading />
              </td>
            </tr>
          ) : (
            categories.map((category, index) => (
              <TableRowCategory data={category} key={category?.id} index={index} handleDelete={handleDelete}/>
            ))
          )}
          {!categoriesLoading && !categories.length && (
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