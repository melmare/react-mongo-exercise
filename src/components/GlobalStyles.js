import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 20px;
  font-family: sans-serif;
  color: darkslategray;
  background: papayawhip;
  
}

`;

export default GlobalStyles;
