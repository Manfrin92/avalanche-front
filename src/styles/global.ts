import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    /* font-family: 'Roboto Slab', serif; */
    font-size: 16px;
    border: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast--success {
    background: #00A57C !important;
    font: 14px Montserrat, sans-serif !important;
    font-weight: 600 !important;
}

.Toastify__toast--error {
    background: #de3b3b !important;
    font: 14px Montserrat, sans-serif !important;
    font-weight: 600 !important;
}

`;
