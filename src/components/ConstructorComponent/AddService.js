import React from 'react';
import styles from "./ConstructorComponent.module.css";

const AddService = ({servicesToggle}) => {
    return (
        <div className={styles.onAddForm} onClick={servicesToggle}>
            <div className={styles.form}  onClick={event => event.stopPropagation()}>
                AddService
            </div>
        </div>
    );
};

export default AddService;