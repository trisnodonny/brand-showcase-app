import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function HomeView() {
  return(
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center mb-5">
          <img 
            className="img-fluid w-75"
            src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/8/W36-Homepage-Ladies-Men-Divided-Kids-Baby-Sport-99-Super-Sale-Bhs.jpg"
            alt=""
          />
        </div>
        <div className="d-flex justify-content-center mb-5">
          <img 
            className="img-fluid w-75"
            src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/8/W36-Ladies-Discover-Your-New-Favourite-Bhs.jpg"
            alt=""
          />
        </div>
        <div className="d-flex justify-content-center mb-5">
          <img 
            className="img-fluid w-75"
            src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/8/W35-Homepage-Ladies-Men-Divided-Kids-Baby-Sport-Fresh-Style-Bhs.jpg"
            alt=""
          />
        </div>
        <div className="container mb-5">
          <h5 className="text-center">Belanja dengan mudah!</h5>
          <div>
            <Splide
              options={{
                type: "loop",
                autoplay: true,
                drag: false,
                fixedWidth: 1700,
              }}
            >
              <SplideSlide>
                <img 
                  className='w-75'
                  src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/3/W10-Homepage-Find-The-Right-Size-Bhs.jpg"
                  alt="Image 1"
                />
              </SplideSlide>
              <SplideSlide>
                <img 
                  className='w-75'
                  src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/3/W10-Homepage-Free-Delivery-Bhs.jpg"
                  alt="Image 2"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  className='w-75'
                  src="https://d29c1z66frfv6c.cloudfront.net/pub/media/banner/23/6/W23-Enjoy-20-Off-Bhs.jpg"
                  alt="Image 3"
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </>
  )
}