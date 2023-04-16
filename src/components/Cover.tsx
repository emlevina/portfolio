import React from 'react';
import styles from './cover.module.css'
import { useContext } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { LangContext } from '../context/LangContext';


const Nav = () => {
    return (
        <nav>
            <ul className={styles.menu}>
                <li><a href='mailto:katya.leemi@gmail.com'>katya.leemi@gmail.com</a></li>
                <li><a href='./Orlova_CV_Fullstack.pdf' target="_blank" rel="noopener noreferrer">CV</a></li>
                <ThemeSwitcher />
            </ul>
        </nav>
    )
}

const ListItem = ({ item, isLink }: { item: string, isLink?: boolean }) => {
    const { changeLang } = useContext(LangContext)

    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        let lang = (e.target as HTMLAnchorElement).id
        if (['heb', 'eng', 'rus'].includes(lang)) {
            changeLang(lang as 'heb' | 'eng' | 'rus')
        }
    }

    return isLink ? (
        <li><a href='#about' onClick={onClick} id={item.toLowerCase().slice(0, 3)}>{item}</a></li>
    ) : (
        <li>{item}</li>
    )
}


const List = ({ items, isLink }: { items: string[], isLink?: boolean }) => {
    return (
        <ul className={styles.list}>
            {items.map(item => <ListItem item={item} isLink={isLink} key={`${item.toLowerCase()}`} />)}
        </ul>
    )
}


const AboutText = () => {
    interface Translation {
        [key: string]: string
    }

    const { lang } = useContext(LangContext)
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
            desc1: 'אמא ומתכנתת',
            desc2: 'ומעריצה ענקית של',
            frozen: 'פרוזן ',
            desc3: ''
        }
    };

    const { firstname, surname, desc1, desc2, desc3, frozen } = translations[lang]
    const isHebrew = lang === 'heb' ? true : false
    return (
        <div>
            <h1 className={styles.title} style={isHebrew ? {textAlign: 'right'} : {textAlign: 'inherit'}}>
                <span className={styles.textAccent}>{firstname}</span><br /><span>{surname}</span>
            </h1>
            <p className={styles.aboutText} style={isHebrew ? {textAlign: 'right'} : {textAlign: 'inherit'}}>
                <span>{desc1}</span><br />
                <span>{desc2}</span>
                <span className={styles.textAccent}>{frozen}</span>
                <span>{desc3}</span>
            </p>
        </div>
    )
}

const About = () => {
    
    const languages = ['Russian', 'Hebrew', 'English'];
    const skills = ['CSS/HTML', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'Redux', 'MongoDB', 'Postgres'];
    

    return (
        <div className={styles.about}>
            <List items={languages} isLink={true} />
            <AboutText />
            <List items={skills} />
        </div>
    )
}

const Cover = () => {
    interface Translation {
        [key: string]: string
    }

    const { lang } = useContext(LangContext)
    const translations: { [key: string]: Translation } = {
        eng: {
            prompt: 'Scroll to see the projects'
        },
        rus: {
            prompt: 'Крути чтобы увидеть больше'
        },
        heb: {
            prompt: 'Scroll to see the projects'
        }
    }

    const { prompt } = translations[lang]

    return (
        <section className={styles.fullscreen} id="about">
            <Nav />
            <About />
            <p className={styles.scrollPrompt}>{prompt}</p>
            <div className={styles.bg}></div>
        </section>
    );
};

export default Cover;