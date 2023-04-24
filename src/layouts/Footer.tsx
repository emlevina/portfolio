import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    const facts = [
        'I live in Haifa',
        'I love singing songs from cartoons',
        'I have a daughter'
    ]

    const randomFact = facts[facts.length * Math.random() | 0]
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <h2>Ekaterina<br /><span className={styles.textAccent}>Orlova</span></h2>
                <p>Random fact about me:<br /> {randomFact}</p>
            </div>
            <div className={styles.right}>
                <ul className={styles.list}>
                    <li><a href='mailto:katya.leemi@gmail.com'>katya.leemi@gmail.com</a></li>
                    <li><a href='./Orlova_CV_Fullstack.pdf' target="_blank" rel="noopener noreferrer">CV</a></li>
                </ul>
            </div>

        </footer>
    );
};

export default Footer;