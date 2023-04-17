import React from 'react';
import './App.css';
import Cover from './screens/Cover';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react'
import Form from './screens/Form';
import Projects from './screens/Projects';
import Footer from './layouts/Footer';
import Wrapper from './components/Wrapper';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <Wrapper>
        <Cover />
      </Wrapper>
      <Wrapper>
        <Projects />
      </Wrapper>
      <Wrapper>
        <Form />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
