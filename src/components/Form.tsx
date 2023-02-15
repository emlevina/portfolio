import React from 'react';
import styles from './form.module.css'

type FieldData = {
    tag: 'input' | 'textarea',
    type?: 'text' | 'email',
    name: string,
    id: string,
    placeholder: string,
    required: boolean,
    prompt: string
}

const Field = ({ data: { tag, type, name, id, placeholder, required, prompt } }: { data: FieldData }) => {
    return tag === 'input' ? (
        <div className={styles.field}>
            <input className={styles.input} type={type} name={name} id={id} placeholder={placeholder} required={required} />
            <label htmlFor={name}>{prompt}</label>
        </div>
    ) : (
        <div className={styles.field}>
            <textarea className={styles.input} name={name} id={id} placeholder={placeholder} required={required}></textarea>
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
            type: 'email',
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

    return (
        <section className={styles.fullscreen} id="form">
            <h1 className={styles.title}>Write me something nice!</h1>

            <form className={styles.form}>
                <Field data={formData[0]} />
                <Field data={formData[1]} />
                <Field data={formData[2]} />
                <button type="submit" className={styles.btn}>Send</button>
            </form>

        </section>
    );
};

export default Form;