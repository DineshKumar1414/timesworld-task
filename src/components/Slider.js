import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  const images = [
    'https://picsum.photos/id/1018/800/400',
    'https://picsum.photos/id/1015/800/400',
    'https://picsum.photos/id/1025/800/400',
  ];

  return (
    <div className="carousel-container">
    <Carousel controls={true} indicators={true} className="carousel-wrapper">
  {images.map((img, index) => (
    <Carousel.Item key={index}>
      <img src={img} alt={`Slide ${index}`} />
    </Carousel.Item>
  ))}
</Carousel>


    </div>
  );
};

export default Slider;

