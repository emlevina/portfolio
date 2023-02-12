import React from 'react';
import './Cover.css'
import styles from './cover.module.css'

const translations = {
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

const languages = [{ text: 'Russian'}, { text: 'Hebrew' }, { text: 'English' }];
const skills = [{ text: 'CSS/HTML' }, { text: 'JavaScript' }, { text: 'Node.js' }, { text: 'React' }];

const Nav = () => {
    return (
        <nav className="nav">
            <ul className={styles.menu}>
                <li>katya.leemi@gmail.com</li>
                <li>Portfolio</li>
            </ul>
        </nav>
    )
}

const ListItem = ({ item, onClick }: { item: Item,  onClick?: React.MouseEventHandler }) => {
    return <li><a href="#about" onClick={onClick}>{item.text}</a></li>
}

interface Item {
    text: string,
}


const List = ({ items }: { items: Item[] }) => {
    const func = () => {
        console.log('d')
    }
    return (
        <ul className={styles.list}>
            {items.map(item => <ListItem item={item} onClick={func} />)}
        </ul>
    )
}

interface Translation {
    translation: {
        firstname: string,
        surname: string,
        desc1: string,
        desc2: string,
        frozen: string,
        desc3: string
    }
}

const AboutText = ({ translation }: Translation) => {
    const { firstname, surname, desc1, desc2, desc3, frozen } = translation

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
    return (
        <div className={styles.about}>
            <List items={languages} />
            <AboutText translation={translations.eng} />
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