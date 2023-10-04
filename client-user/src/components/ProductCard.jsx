import convertToRupiah from "../helpers/currecnyFormatter"
import { Link } from "react-router-dom"

export default function ProductCard({data}) {
  
  return (
    <>
    <div className="d-flex flex-column">
      <Link
        to={`/products/${data.id}`}
      >
        <img 
          className="mb-3 img-fluid"
          style={{width: 420}}
          src={data.mainImg}
          alt={data.name}
        />
      </Link>
      <div className="d-flex flex-column">
        <h4>{data.name}</h4>
        <h6>{data.Category?.name}</h6>
        <p>{convertToRupiah(data.price)}</p>
      </div>
    </div>
    </>
  )
}