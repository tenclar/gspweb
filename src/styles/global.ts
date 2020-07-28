import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;

}

html, body, #root {
  height: 100%;

}

body{

  background: #DADBE6;
  color: #fff;
  -webkit-font-smoothing: antialiazed;

}

body, input, button {
  font-family: 'Roboto Slab', serif;
  font-size: 14px;
}

h1, h2, h3, h4, h5,h6 {
  font-weight: 500;
}
button {
  cursor: pointer;

}
`;