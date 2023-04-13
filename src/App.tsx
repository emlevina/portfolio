import React from 'react';
import './App.css';
import Cover from './components/Cover';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react'
import Form from './components/Form';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <Cover />
      <Projects />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
