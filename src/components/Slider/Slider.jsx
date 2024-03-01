import banner from '../../components/images/banner.jpeg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Image } from './Slider.styled';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: {
        items: 3,
        itemsFit: 'contain'
    },
};

const items = [
  <Image key={1} src={banner} onDragStart={handleDragStart} role="presentation" width={100}  data-value="1"/>,
  <Image key={2} src={banner} onDragStart={handleDragStart} role="presentation" width={100} data-value="2"/>,
    <Image key={3} src={banner} onDragStart={handleDragStart} role="presentation" width={100} data-value="3"/>,
  <Image key={4} src={banner} onDragStart={handleDragStart} role="presentation" width={100} data-value="4"/>,
    <Image key={5} src={banner} onDragStart={handleDragStart} role="presentation" width={100} data-value="5"/>,
  <Image key={6} src={banner} onDragStart={handleDragStart} role="presentation" width={100} data-value="6"/>,
];

const Slider = () => {
  return (
      <AliceCarousel autoWidth={true} responsive={responsive} infinite={true} mouseTracking items={items} autoPlay={true} disableButtonsControls={true} disableDotsControls={true} />
  );
}

export default Slider;
