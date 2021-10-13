import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;

}
*:focus {
    outline:0;
  }

html, body, #root {
  min-height: 100%;

}

body{

  background: #DADBE6;
  color: #fff;
  -webkit-font-smoothing: antialiazed;

}

body, input, button {
  font-family: 'Segoe UI', 'Century Gothic', Poppins, Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
}

h1, h2, h3, h4, h5,h6 {
  font-weight: 500;
}
button {
  cursor: pointer;

}
`;
