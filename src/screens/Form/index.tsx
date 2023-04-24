import React, { useState } from 'react';
import styles from './form.module.css';
import axios from 'axios';
import { formData, FieldData } from './formData'

type FieldProps = {
    data: FieldData,
    setData: (val: string) => void,
    fieldValue: string
}

const Field: React.FC<FieldProps> = ({ data: { tag, type, name, id, placeholder, required, prompt }, setData, fieldValue }) => {
    return tag === 'input' ? (
        <div className={styles.field}>
            <input value={fieldValue} onChange={(e) => setData(e.target.value)} className={styles.input} type={type} name={name} id={id} placeholder={placeholder} required={required} />
            <label htmlFor={name}>{prompt}</label>
        </div>
    ) : (
        <div className={styles.field}>
            <textarea value={fieldValue} onChange={(e) => setData(e.target.value)} className={styles.input} name={name} id={id} placeholder={placeholder} required={required}></textarea>
            <label htmlFor={name}>{prompt}</label>
        </div>
    )
}

const Form = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    const [message, setMessage] = useState('Write me something nice!')

    const tg = {
        token: process.env.REACT_APP_BOT_TOKEN,
        chatId: process.env.REACT_APP_CHAT_ID,
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const obj = {
            chat_id: tg.chatId, // Telegram chat id
            text: { email, name, body } // The text to send
        };
        axios.post(`https://api.telegram.org/bot${tg.token}/sendMessage`, obj)
            .then(res => {
                setMessage(`Thank you${name && `, ${name}`}, your message is sent!`)
            })
            .catch(err => {
                setMessage(`Sorry${name && `, ${name}`}, smth is wrong!`)
                console.log(err)
            })
            .finally(() => {
                setEmail('')
                setBody('')
                setName('')
            })
    }

    return (
        <section className={styles.parent} id="form">
            <h1 className={styles.title}>{message}</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <Field data={formData.email} setData={setEmail} fieldValue={email} />
                <Field data={formData.name} setData={setName} fieldValue={name} />
                <Field data={formData.body} setData={setBody} fieldValue={body} />
                <button type="submit" className={styles.btn}>Send</button>
            </form>

        </section>
    );
};

export default Form;