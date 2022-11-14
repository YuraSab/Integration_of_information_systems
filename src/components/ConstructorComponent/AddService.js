import React from 'react';
import styles from "./ConstructorComponent.module.css";

const AddService = ({commodityToggle}) => {
    return (
        <div className={styles.onAddForm} onClick={commodityToggle}>
            <div className={styles.form}  onClick={event => event.stopPropagation()}>
                AddService
            </div>
        </div>
    );
};

export default AddService;