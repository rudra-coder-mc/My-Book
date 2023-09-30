const img1 = require("../image/A-book-photo-with-title-of-MyBooks (1).png");
const img2 = require("../image/A-book-photo-with-title-of-MyBooks.png");
const img3 = require("../image/A-library-image (1).png");
const img4 = require("../image/A-library-image (2).png");
const img5 = require("../image/A-library-image (3).png");
const img6 = require("../image/A-library-image (4).png");
const img7 = require("../image/A-library-image (5).png");
const img8 = require("../image/A-library-image.png");

const Carousel = () => {
  return (
    <div className="container-fulid m-4">
      {/* <!-- Carousel wrapper --> */}
      <div
        id="carouselMaterialStyle"
        className="carousel slide carousel-fade "
        data-mdb-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators ">
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselMaterialStyle"
            data-mdb-slide-to="7"
            aria-label="Slide 8"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner rounded-5  shadow-4-strong">
          {/* <!-- Single item --> */}
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100 "
              alt="Sunset Over the City"
              width="640"
              height="460"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="Canyon at Nigh"
              width="640"
              height="460"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
              width="640"
              height="460"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={img4}
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
              width="640"
              height="460"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={img5}
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
              width="640"
              height="460"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={img6}
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
              width="640"
              height="460"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={img7}
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
              width="640"
              height="460"
            />
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <img
              src={img8}
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
              width="640"
              height="460"
            />
          </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide="prev"
        >
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide="next"
        >
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- Carousel wrapper --> */}
    </div>
  );
};
export default Carousel;
