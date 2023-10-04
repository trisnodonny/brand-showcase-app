import { Link } from "react-router-dom"

export default function Footer() {
  const mouseOver = (event) => {
    return event.target.style.textDecoration = "underline"
  }

  const mouseOut = (event) => {
    return event.target.style.textDecoration = "none"
  }

  return (
    <>
      <footer className="">
        <div className="bg-body-secondary">
          <div className="container py-5">
            <div className="d-flex justify-content-center gap-5">
              <nav>
                <h6>SHOP</h6>
                <ul className="mt-3 list-group me-5">
                  <li className="list-group">Wanita</li>
                  <li className="list-group">Pria</li>
                  <li className="list-group">Divided</li>
                  <li className="list-group">Baby</li>
                  <li className="list-group">Anak-anak</li>
                  <li className="list-group">Sport</li>
                  <li className="list-group">Sale</li>
                </ul>
              </nav>
              <nav>
                <h6>INFORMASI PERUSAHAAN</h6>
                <ul className="mt-3 list-group me-5">
                  <li className="list-group">Berkarir di H&M</li>
                  <li className="list-group">Mengenai H&M</li>
                  <li className="list-group">Sustainability</li>
                  <li className="list-group">Pres</li>
                  <li className="list-group">Hubungan Investor</li>
                  <li className="list-group">Tata Kelola Perusahaan</li>
                </ul>
              </nav>
              <nav>
                <h6>BANTUAN</h6>
                <ul className="mt-3 list-group me-5">
                  <li className="list-group">Customer Service</li>
                  <li className="list-group">My H&M</li>
                  <li className="list-group">Lokasi Toko</li>
                  <li className="list-group">Kebijakan Privasi</li>
                  <li className="list-group">Kontak</li>
                </ul>
              </nav>
            </div>
            <div className="d-flex justify-content-center my-2">
              <img 
                src="https://cdn.icon-icons.com/icons2/2845/PNG/512/hm_logo_icon_181277.png"
                alt=""
                style={{width : 50}}
              />
            </div>
            <div>
              <p className="container text-center w-75">
                Konsep bisnis H&amp;M menawarkan fashion dan kualitas dengan harga terbaik dan cara yang berkelanjutan.
                H&amp;M sejak didirikan pada tahun 1947 tumbuh menjadi salah satu perusahaan fesyen terkemuka di dunia. Seluruh isi
                dan informasi dari situs ini dilindungi hak cipta dan merupakan milik H&amp;M Hennes and Mauritz AB.
                <br/>
                Layanan
                Pengaduan Konsumen, Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga, Kementerian Perdagangan Republik
                Indonesia, 0853-1111-1010 (WhatsApp)
              </p>
            </div>
            <div className="container py-3">
              <div className="d-flex justify-content-center gap-4">
                <Link 
                  to="https://www.facebook.com/hmindonesia"
                  target="_blank"
                  className="bi bi-facebook text-body"
                ></Link>

                <Link
                  to="https://twitter.com/hmindonesia_"
                  target="_blank"
                  className="bi bi-twitter text-body"
                ></Link>

                <Link
                  to="https://www.instagram.com/hm/"
                  target="_blank"
                  className="bi bi-instagram text-body"
                ></Link>

                <Link
                  to="https://www.youtube.com/user/hennesandmauritz"
                  target="_blank"
                  className="bi bi-youtube text-body" 
                ></Link>
              </div>
            </div>
            <p className="text-center pt-4">
              <Link
                to="https://id.hm.com/"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseOver={mouseOver}
                onMouseOut={mouseOut}
              >
                Indonesia
              </Link> | Rp
            </p>
          </div>

        </div>
      </footer>
    </>
  )
}