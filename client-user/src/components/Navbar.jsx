import { Link } from "react-router-dom"

export default function Navbar() {
  const mouseOver = (event) => {
    return event.target.style.textDecoration = "underline"
  }

  const mouseOut = (event) => {
    return event.target.style.textDecoration = "none"
  }

  return (
    <>
      <div className="d-flex justify-content-between mx-5 pt-5 mb-3">
        <div>
          <ul className="nav">
            <li className="nav-link">
              <Link
                className="text-dark" 
                to="/customer-service"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                  Customer Service
              </Link>
            </li>
            <li className="nav-link">
              <Link
                className="text-dark"
                to="/store-location"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
               >
                  Mencari Lokasi Toko
              </Link>
            </li>
            <li className="nav-link">
              <h5
                className="bi bi-three-dots text-dark"
                style={{cursor: "pointer"}}
              ></h5>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
          alt=""
          style={{width : 60}}
        />
        </Link>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                <i className="bi bi-person me-2"></i>
                Masuk Akun
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                <i className="bi bi-heart me-2"></i>
                Favorit
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                <i className="bi bi-bag me-2"></i>
                Tas Belanja
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-center">
          <ul className="nav">
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                All
              </Link>
            </li>
            <li className="nav-item">
              <a
                href=""
                className="nav-link"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Wanita
              </a>
            </li>
            <li className="nav-item">
              <a
                href=""
                className="nav-link"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Pria
              </a>
            </li>
            <li className="nav-item">
              <a
                href=""
                className="nav-link"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Divided
              </a>
            </li>
            <li className="nav-item">
              <a
                href=""
                className="nav-link"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Baby
              </a>
            </li>
            <li className="nav-item">
              <a
                href=""
                className="nav-link"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Anak-anak
              </a>
            </li>
            <li className="nav-item">
              <a
                href=""
                className="nav-link"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Sport
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}