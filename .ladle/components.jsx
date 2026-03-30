import * as React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    purple70: '#4a148c',
    purple50: '#9c27b0',
    grey90: '#f5f5f5',
    white: '#ffffff'
  },
  font: {
    family: 'sans-serif'
  }
};

export const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
