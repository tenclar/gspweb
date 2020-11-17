import styled from 'styled-components';
import { Link } from 'react-router-dom';

import bgsearchr from '../../../assets/bgsearchr.svg';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  color: #363636;
`;

export const SearchContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: initial;
  background: url(${bgsearchr}) #3a86c3;
  background-repeat: no-repeat;
  background-position-x: right;
`;

export const SearchInput = styled.div`
  margin: 10px 10px 10px 100px;
  width: 80%;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
      width: 200px;
      margin-left: 50px;
      color: #fff;
      font-weight: 700;
    }

    /*  input {
      font-family: 'Segoe UI', Poppins, sans-serif;
      font-size: 14px;
      font-weight: 350;
      margin: 5px 0 5px 5px;
      padding: 10px;
      width: 70%;
      height: 40px;
      border: 0;

      border-radius: 5px 0 0 5px;
      box-shadow: -3px 3px 9px 1px rgba(0, 0, 0, 0.25);

      &::placeholder {
        font-style: italic;
        color: rgba(0, 0, 0, 0.25);
      }
    }
    */
  }

  button {
    font-family: 'Segoe UI', Poppins, sans-serif;
    font-size: 14px;
    font-weight: 350;
    color: #fff;
    background: #66c5a0;
    height: 40px;
    width: 100px;
    padding: 10px;
    border: 0;
    border-radius: 0 5px 5px 0;
    box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.25);

    &:hover {
      /* background: #e4d50a; */
      background: #e64a22;
    }
  }
`;

export const SearchResult = styled.div`
  margin: 0 80px 0 80px;
`;
export const Title = styled.div`
  padding: 20px;
  margin-bottom: 25px;
  font: 25px 'Century Gothic', 'Segoe UI', sans-serif;
  font-weight: 500;
  text-align: center;
  border-bottom: #777 solid 1px;
`;

export const ResultList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 20px;
  list-style-type: none;
`;

export const Result = styled.li`
  margin: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.25);
`;
export const Orgao = styled.span`
  display: block;
  margin-bottom: 5px;
  width: 100%;
  font-size: 16px;
`;

export const ResultTitle = styled.span`
  width: 100%;
  display: block;
  font: 32px 'Century Gothic', Segoe UI, sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const Categoria = styled.span`
  display: block;
  width: 100%;
  font-size: 16px;
`;
export const NomePopular = styled.span`
  display: block;
  width: 100%;
  font-size: 16px;
`;

export const Descricao = styled(Link)`
  display: block;
  margin-bottom: 10px;
  width: 80%;
  font: 20px Century Gothic, Segoe UI, sans-serif;
  text-decoration: none;
  &:active,
  :default,
  :visited,
  :link {
    color: #000;
  }
  &:hover {
    color: #888;
  }
`;
