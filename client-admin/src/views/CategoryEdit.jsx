import FormCategory from "../components/FormCategory"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategoryById } from "../stores/actions/actionCreator"

function CategoryEdit() {
  const { id } = useParams()
  const { category, categoriesLoading } = useSelector((state) => state.category)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategoryById(id))
  }, [])

  return (
    <>
      {category && (
        <FormCategory edit data={category} />
      )}
    </>
  )
}

export default CategoryEdit