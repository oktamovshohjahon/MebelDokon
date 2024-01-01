import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function PageCarousel({ images }) {
  return (
    <div className="carousel">
      <Carousel>
        {images.map((image) => {
          return <img src={image} alt="Uzur, rasmni yuklay olmadik !" />;
        })}
      </Carousel>
    </div>
  );
}

export default PageCarousel;
