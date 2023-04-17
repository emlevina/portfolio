import React from 'react';
import styles from './cover.module.css';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import { translations } from './translations';
import Nav from '../../layouts/Nav';
import About from './About';

const Cover = () => {
    const { lang } = useContext(LangContext)
    const { prompt } = translations[lang]

    return (
        <section className={styles.parent} id="about">
            <Nav />
            <About />
            <p className={styles.scrollPrompt}>{prompt}</p>
            <div className={styles.bg}></div>
        </section>
    );
};

export default Cover;