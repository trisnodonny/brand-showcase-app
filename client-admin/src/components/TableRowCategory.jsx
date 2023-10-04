import { Link } from "react-router-dom"
import DateFormatter from "../helpers/dateFormatter"

export default function TableRowCategory({ data, index, handleDelete }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>{DateFormatter(data.createdAt)}</td>
      <td>{DateFormatter(data.updatedAt)}</td>
      <td>
        <Link to={`/edit-category/${data.id}`} className="btn btn-primary me-2">
          Edit
        </Link>
        <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  )
}