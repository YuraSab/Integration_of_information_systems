import React from 'react';
import styles from "./ConstructorComponent.module.css";

const AddCommodity = ({servicesToggle}) => {
    return (
        <div className={styles.onAddForm} onClick={servicesToggle}>
            <div className={styles.form} onClick={event => event.stopPropagation()}>
                AddCommodity
            </div>
        </div>
    );
};

export default AddCommodity;