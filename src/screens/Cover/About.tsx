import styles from './cover.module.css'
import { useContext } from 'react';
import { LangContext } from '../../context/LangContext';
import { languages } from './languages';
import { skills } from './skills';
import { translations } from './translations';

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
    const { lang } = useContext(LangContext)
    const { firstname, surname, desc1, desc2, desc3, frozen } = translations[lang]
    const isHebrew = lang === 'heb' ? true : false

    return (
        <div>
            <h1 className={styles.title} style={isHebrew ? { textAlign: 'right' } : { textAlign: 'inherit' }}>
                <span className={styles.textAccent}>{firstname}</span><br /><span>{surname}</span>
            </h1>
            <p className={styles.aboutText} style={isHebrew ? { textAlign: 'right' } : { textAlign: 'inherit' }}>
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
            <List items={languages} isLink={true} />
            <AboutText />
            <List items={skills} />
        </div>
    )
}

export default About;