import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

  body {
    background-color: #000000;
  }

  * {
    /* color: ${props => (props.whiteColor ? 'white' : 'black')}; */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    font-family: 'Noto Sans', sans-serif;
    font-weight: 500;
  }

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #B2AAAA #000000;
  }

  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #000000;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #B2AAAA;
    border-radius: 10px;
    border: 3px solid #B2AAAA;
  }

  html {
    ${'' /* scroll-snap-type: mandatory;
    scroll-snap-type: y mandatory; */}
    ${'' /* scroll-padding: 100px 0; */}
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
