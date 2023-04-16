import React, { useState } from 'react';
import styles from './form.module.css';
import axios from 'axios';

type FieldData = {
    tag: 'input' | 'textarea',
    type?: 'text' | 'email',
    name: string,
    id: string,
    placeholder: string,
    required: boolean,
    prompt: string
}

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
    const formData: FieldData[] = [
        {
            tag: 'input',
            type: 'email',
            name: 'email',
            id: 'email',
            placeholder: 'me@domain.com',
            required: true,
            prompt: 'Your e-mail *'
        },

        {
            tag: 'input',
            type: 'text',
            name: 'name',
            id: 'name',
            placeholder: 'Ekaterina Orlova',
            required: false,
            prompt: 'How can I call you?'
        },
        {
            tag: 'textarea',
            name: 'textarea',
            id: 'textarea',
            placeholder: 'Your inquiry',
            required: false,
            prompt: 'And you want to tell me...'
        },
    ]

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
        console.log(email, name, body)
        const obj = {
            chat_id: tg.chatId, // Telegram chat id
            text: { email, name, body } // The text to send
        };
        axios.post(`https://api.telegram.org/bot${tg.token}/sendMessage`, obj)
            .then(res => {
                setMessage(`Thank you${name && `, ${name}`}, message is sent!`)
                console.log(res.data)
            })
            .catch(err => {
                setMessage(`Sorry${name && `, ${name}`}, smth is wrong!`)
                console.log(err)})
            .finally(() => {
                setEmail('')
                setBody('')
                setName('')
            })
    }

    return (
        <section className={styles.fullscreen} id="form">
            <h1 className={styles.title}>{message}</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <Field data={formData[0]} setData={setEmail} fieldValue={email} />
                <Field data={formData[1]} setData={setName} fieldValue={name} />
                <Field data={formData[2]} setData={setBody} fieldValue={body} />
                <button type="submit" className={styles.btn}>Send</button>
            </form>

        </section>
    );
};

export default Form;