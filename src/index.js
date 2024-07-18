import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Box, ThemeProvider } from '@mui/material';
import {theme} from "./MaterailComponents/ThemePageComponent"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

