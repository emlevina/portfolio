import React from "react";
import styles from './wrapper.module.css';

type Props = {
    children?: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.fullscreen}>
            {children}
        </div>
    )
}


export default Wrapper;
