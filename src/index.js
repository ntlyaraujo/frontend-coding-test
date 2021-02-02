import React from 'react';
import ReactDOM from 'react-dom';
import { StyleProvider, ThemeProvider } from 'vcc-ui';
import volvo from 'vcc-ui/lib/themes/volvo';
import './index.css';
import App from './App';

ReactDOM.render(
  <StyleProvider>
    <ThemeProvider theme={volvo}>
      <App />
    </ThemeProvider>
  </StyleProvider>,
  document.getElementById('root')
);