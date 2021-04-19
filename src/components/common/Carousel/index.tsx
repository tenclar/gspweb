import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Container, CarouselWrapper, Item } from './styles';

interface IRequestProps {
  items: any[];
}
const CarouselComponente: React.FC<IRequestProps> = ({ items }) => {
  // const [items, setItems] = useState([1, 2, 3]);
  const breakPoints = [
    /* { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 }, */
    { width: 1200, itemsToShow: 1 },
  ];
  /* const addItem = (): void => {
    const nextItem = Math.max(1, items.length + 1);
    setItems([...items, nextItem]);
  };

  const removeItem = (): void => {
    const endRange = Math.max(0, items.length - 1);
    setItems(items.slice(0, endRange));
  }; */

  return (
    <Container>
      <CarouselWrapper>
        <Carousel breakPoints={breakPoints} isRTL={false}>
          {items.map((item) => (
            <Item key={item.id} imageUrl={item.imagem}>
              {item.titulo}
            </Item>
          ))}
        </Carousel>
      </CarouselWrapper>
    </Container>
  );
};

export default CarouselComponente;
