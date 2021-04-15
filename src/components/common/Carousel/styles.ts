import styled from 'styled-components';

interface ItemProps {
  imageUrl?: string;
}
export const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 550px;
  margin-bottom: 50px;
`;

export const Item = styled.div<ItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
  width: 100%;

  background: #683 url(${(props) => props.imageUrl}) no-repeat center;
  // background-size: 50% 50%;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;
export const ControlsWrapper = styled.div`
  width: 100%;
`;
export const CarouselWrapper = styled.div`
  width: 100%;
`;

export const Seperator = styled.div`
  width: 100%;
`;

export const RecCarouselItem = styled.div`
  &:focus {
    outline: none;
    box-shadow: inset 0 0 1px 0px violet;
  }
`;
