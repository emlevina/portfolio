import React from 'react';
import ReactDOM from 'react-dom/client';
import '@csstools/normalize.css';
import './index.css';
import App from './App';
import ThemeProvider from './providers/themeProvider';
import { LangProvider } from './providers/langProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider>
    <LangProvider >
      <App />
    </LangProvider >
  </ThemeProvider>
);
