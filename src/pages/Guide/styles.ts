import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../assets/jubotron.svg';

export const Container = styled.div`
  /* min-height: 100vmin; */
  /*   flex: 1;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  margin: 0;
  padding: 0;
  min-height: 100% !important;
`;

export const Search = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  /* background: url(${background}), linear-gradient(-90deg, #1c75bc, #fff); */


    background: url(${background}) #3a86c3 ;
    background-repeat: no-repeat;
    background-position: left;
    /* background-size: 100% 100%; */

/* border: #000 solid 1px; */
`;

export const TitleGuide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* font-family: 'Segoe UI', Poppins, sans-serif; */

  margin: 0;
  /* border: #000 solid 1px; */
`;

export const Guia = styled.span`
  color: #fff;
  font-size: 90px;
`;
export const De = styled.span`
  margin-left: -25px;
  font-size: 60px;
  color: #dadada;
`;
export const Servico = styled.span`
  color: #fff;
  font-size: 70px;
  margin-top: -30px;
  flex: 1;
`;

export const Publico = styled.span`
  color: #fff;
  font-size: 70px;
  font-weight: 300;
  font-style: italic;
  flex: 1;
`;

export const Frase = styled.span`
  color: #fff;
  font: 25px 'Century Gothic', sans-serif;
`;

export const SearchInput = styled.div`
  margin: 5px;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  button {
    /* font-family: 'Segoe UI', Poppins, sans-serif; */
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    background-color: #66c5a0;
    height: 50px;
    width: 100px;
    padding: 10px;
    border: 0;
    border-radius: 0 5px 5px 0;
    box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.25);
  }
`;

export const Button = styled(Link)`
  text-align: center;
  /* font-family: 'Segoe UI', Poppins, sans-serif; */
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #66c5a0;
  height: 52px;
  width: 100px;
  padding: 10px;
  border: 0;
  border-radius: 0 5px 5px 0;
  box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #ffd700;
  }
`;

export const Avisos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  align-content: center;
  background-color: #dadada;
`;

export const SessionCategory = styled.div`
  /* font-family: Century Gothic; */
  min-height: 550px;
  margin: 10px;
`;
export const HeaderCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: #707070 solid 1px;
`;
export const ServiceTitle = styled.div`
  margin: 20px 0 10px 0;
  font-size: 36px;
  font-weight: 350;
  color: #707070;
`;

export const SessionTitle = styled.div`
  font-size: 20px;
  color: #707070;
`;

export const CategoryList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Category = styled.div`
  width: 340px;
  height: 344px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin: 15px;
  color: #363636;
  border-radius: 5px;
  // box-shadow: 3px 3px 9px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);

  //border: #d4d2d2 solid 1px;
  transition: all 0.2s linear;
  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    background: #eee;
    margin-top: -50px;
    transition: all 0.3s linear;
  }
  strong {
    font-size: 20px;
    color: #e65121;
    margin: 20px;
    transition: all 0.3s linear;
  }

  p {
    font-size: 16px;
    transition: all 0.3s linear;
  }

  &:hover {
    transition: all 200ms ease-in;
    transform: scale(1.1);
  }

  /* &:hover {
    width: 350px;
    height: 360px;

    img {
      height: 150px;
      width: 150px;
    }
    strong {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
  } */
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  margin-top: 20px;
  background: linear-gradient(
    to right,
    rgba(255, 206, 9, 1) 0%,
    rgba(158, 189, 22, 1) 30%,
    rgba(64, 164, 41, 1) 51%,
    rgba(158, 189, 22, 1) 70%,
    rgba(255, 206, 9, 1) 100%
  );
`;

export const SessionFooter = styled.div`
  color: #000;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  justify-content: space-around;

  div {
    margin: 10px;
  }
`;
export const Footer = styled.div`
  /* font-family: Century Gothic; */
  color: #000;
  border-top: #dadada solid 1px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
`;
