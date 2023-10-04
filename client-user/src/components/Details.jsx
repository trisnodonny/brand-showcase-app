import convertToRupiah from "../helpers/currecnyFormatter"

export default function Details({data}) {
  return (
    <>
      <div className="mx-auto my-5 w-75">
        <div className="d-flex justify-content-center gap-5">
          <div className="d-flex flex-row gap-1">
            <img
              style={{width: 500}} 
              src={data.mainImg}
              alt=""
            />
          <div className="d-flex flex-column gap-1">
            {data.Images && data.Images[0] && (
              <img
                style={{width: 250}}   
                src={data.Images[0].imgUrl}
                alt={data.name}
              />
            )}
            {data.Images && data.Images[1] && (
              <img
                style={{width: 250}}  
                src={data.Images[1].imgUrl}
                alt=""
              />
            )}
          </div>
          </div>
          <div className="w-25">
            <h3>{data.name}</h3>
            <p>{data?.Category?.name}</p>
            <p>{data.description}</p>
            <p>{convertToRupiah(data.price)}</p>
            <label
              style={{fontSize: 12}}
              className="text-secondary"
            >
              Your size currently is not available
            </label>
            <select
              className="form-select mb-3"
              defaultValue="select"
            >
              <option value="select" disabled>Select size</option>
              <option value="">XS</option>
              <option value="">S</option>
              <option value="">M</option>
              <option value="">L</option>
              <option value="">XL</option>
              <option value="">XXL</option>
            </select>
            <button className="btn btn-dark w-100">
              <i className="bi bi-bag me-2"></i>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </>
  )
}