import React from 'react';
import './App.css';
import Cover from './components/Cover';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react'
import Form from './components/Form';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <Cover />
      <Form />
    </div>
  );
}

export default App;
