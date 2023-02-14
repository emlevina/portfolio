import React, { MouseEventHandler } from 'react';
import styles from './cover.module.css'
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';


const Nav = () => {
    return (
        <nav className="nav">
            
            <ul className={styles.menu}>
                <li>katya.leemi@gmail.com</li>
                <li>Portfolio</li>
                <ThemeSwitcher />
            </ul>
        </nav>
    )
}

const ListItem = ({ item, callback }: { item: string, callback?: MouseEventHandler }) => {
    return callback ? (
        <li><a href='#about' onClick={callback} id={item.toLowerCase().slice(0, 3)}>{item}</a></li>
    ) : (
        <li>{item}</li>
    )
}


const List = ({ items, callback }: { items: string[], callback?: MouseEventHandler }) => {

    return (
        <ul className={styles.list}>
            {items.map(item => <ListItem item={item} callback={callback} key={`${item.toLowerCase()}`}/>)}
        </ul>
    )
}

interface Translation {
    firstname: string,
    surname: string,
    desc1: string,
    desc2: string,
    frozen: string,
    desc3: string
}

const AboutText = ({ translation: { firstname, surname, desc1, desc2, desc3, frozen } }: { translation: Translation }) => {
    return (
        <div>
            <h1 className={styles.title}>
                <span className={styles.textAccent}>{firstname}</span><br /><span>{surname}</span>
            </h1>
            <p className={styles.aboutText}>
                <span>{desc1}</span><br />
                <span>{desc2}</span>
                <span className={styles.textAccent}>{frozen}</span>
                <span>{desc3}</span>
            </p>
        </div>
    )
}

const About = () => {
    const [lang, setLang] = useState('eng')

    const translations: { [key: string]: Translation } = {
        eng: {
            firstname: 'Ekaterina',
            surname: 'Orlova',
            desc1: 'Mother, developer, ',
            desc2: 'huge ',
            frozen: 'Frozen',
            desc3: ' fan'
        },
        rus: {
            firstname: 'Екатерина',
            surname: 'Орлова',
            desc1: 'Мать, разработчица, \n',
            desc2: 'фанат ',
            frozen: 'Холодного сердца',
            desc3: ''
        },
        heb: {
            firstname: 'יקטרינה',
            surname: 'אורלוב',
            desc1: 'אמא, מתכנתת,',
            desc2: 'מעריצה ענקית של',
            frozen: 'פרוזן ',
            desc3: ''
        }
    };

    const languages = ['Russian', 'Hebrew', 'English'];
    const skills = ['CSS/HTML', 'JavaScript', 'TypeScript', 'Node.js', 'React'];

    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setLang((e.target as HTMLAnchorElement).id)
    }

    return (
        <div className={styles.about}>
            <List items={languages} callback={onClick} />
            <AboutText translation={translations[lang]} />
            <List items={skills} />
        </div>
    )
}

const Cover = () => {
    return (
        <section className={styles.fullscreen} id="about">
            <Nav />
            <About />
            <p className={styles.scrollPrompt}>Scroll to see the projects</p>
            <div className={styles.bg}></div>
        </section>
    );
};

export default Cover;