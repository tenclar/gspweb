import styled from 'styled-components';
/* import { Link } from 'react-router-dom'; */
import bgsearchr from '../../../assets/bgsearchr.svg';

export const Container = styled.div`
  width: 100%;
  color: #000;
`;

export const Breadcrumb = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: initial;
  align-items: center;
  background: url(${bgsearchr}) #3a86c3;
  background-repeat: no-repeat;
  background-position-x: right;
  color: #fff;
  padding: 0 0 0 200px;
  font-size: 16px;
  a,
  span {
    margin: 10px;
    &:active,
    :default,
    :visited,
    :link {
      color: #fff;
    }
    &:hover {
      color: #dadada;
    }
  }
`;
export const Content = styled.div`
  width: 90%;
  margin: 2% 8% 0 5%;
`;
export const Title = styled.div`
  padding: 20px;
  margin-bottom: 25px;
  font: 25px 'Century Gothic', 'Segoe UI', sans-serif;
  font-weight: 500;
  text-align: center;
  border-bottom: #777 solid 1px;
`;
export const Detalhe = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.25);

  h1 {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #999;
  }
  p {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;
