import { useState, useEffect } from 'react';
import banner from '../../components/images/banner.jpeg'
import { SliderContainer } from './Slider.styled';

const tarotCards = [
  { id: 1, src: banner, alt: 'Tarot Card 1' },
    { id: 2, src: banner, alt: 'Tarot Card 2' },
    { id: 3, src: banner, alt: 'Tarot Card 3' },
  { id: 4, src: banner, alt: 'Tarot Card 4' },
  // Додайте більше карт за потребою
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === tarotCards.length - 1 ? 0 : currentSlide + 1);
    }, 2000); // 3000 мілісекунд (3 секунди) до наступного слайда

    return () => clearInterval(interval); // Очищення інтервалу при видаленні компонента
  }, [currentSlide]);

  return (
    <SliderContainer>
=
        {tarotCards.map((card, index) => (
          <div
            key={card.id}
            className={index === currentSlide ? 'slide active' : 'slide'}
            style={{ transform: `translateX(${index - currentSlide}00%)` }}
          >
            <img src={card.src} alt={card.alt} width={100}/>
          </div>
        ))}
=
    </SliderContainer>
  );
};

export default Slider;
