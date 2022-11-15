import React from 'react';
import styles from "./ConstructorComponent.module.css";
import CommodityList from "./List/Commodity/CommodityList";

const AddCommodity = ({commodityToggle}) => {
    return (
        <div className={styles.onAddForm} onClick={commodityToggle}>
            <div className={styles.form} onClick={event => event.stopPropagation()}>

                <CommodityList/>
            </div>
        </div>
    );
};

export default AddCommodity;