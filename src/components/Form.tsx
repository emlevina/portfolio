import React from 'react';
import styles from './form.module.css'

const Form = () => {
    return (
        <section className={styles.fullscreen} id="form">
            <div className={styles["flex-column-20"]}>
                <h2>Form</h2>
                <form className={styles.form}>
                    <div className={styles.field}>
                        <input className={styles.input} type="email" name="email" id="email" placeholder="me@domain.com" required />
                        <label htmlFor="email">Your e-mail *</label>
                    </div>
                    <div className={styles.field}>
                        <input className={styles.input} type="text" name="name" id="name" placeholder="Ekaterina Orlova" />
                        <label htmlFor="name">How can I call you?</label>
                    </div>
                    <div className={styles.field}>
                        <textarea className={styles.input} name="textarea" id="textarea" placeholder="Your inquiry"></textarea>
                        <label htmlFor="textarea">And you want to tell me...</label>
                    </div>
                    <button type="submit" className={styles.btn}>Send</button>
                </form>
            </div>
        </section>
    );
};

export default Form;