import { Link } from "react-router-dom"
import convertToRupiah from "../helpers/currecnyFormatter";

export default function TableRowProduct({ data, index, handleDelete}) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.name}</td>
      <td>{data?.Category?.name}</td>
      <td>{convertToRupiah(data.price)}</td>
      <td>{data.description}</td>
      <td>{data.User.email}</td>
      <td><img src={data.mainImg} alt={data.name} style={{width: 100}} /></td>
      <td>
        <Link to={`/edit-product/${data.id}`} className="btn btn-primary me-2">
          Edit
        </Link>
        <button className="btn btn-danger" onClick={() => handleDelete(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  )
}