import React from 'react';
import styles from "./ConstructorComponent.module.css";
import ServicesList from "./List/Services/ServicesList";

const AddService = ({servicesToggle}) => {
    return (
        <div className={styles.onAddForm} onClick={servicesToggle}>
            <div className={styles.form}  onClick={event => event.stopPropagation()}>
                <ServicesList/>
            </div>
        </div>
    );
};

export default AddService;