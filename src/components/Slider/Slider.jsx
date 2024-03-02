import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SliderContainer } from './Slider.styled';
import { cardsSlider } from '../cardsImage/cards';


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: {
        items: 3,
        itemsFit: 'contain'
    },
};

const Slider = () => {
  return (
    <SliderContainer>
      <AliceCarousel animationDuration={1300} transition={1000} autoWidth={true} responsive={responsive} infinite={true} mouseTracking items={cardsSlider} autoPlay={true} disableButtonsControls={true} disableDotsControls={true} />
    </SliderContainer>
    );
}

export default Slider;
