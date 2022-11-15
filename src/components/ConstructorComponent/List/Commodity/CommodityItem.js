import React from 'react';
import styles from "./CommodityList.module.css";

const CommodityItem = ({item}) => {
    return (
        <div className={styles.itemBlock}>
            <div className={styles.title}>
                {item.name}
            </div>
            <div className={styles.photo}>
                <img className={styles.picture} src={item.photo} alt={item.name}/>
            </div>
            <div className={styles.description}>
                <div>Price: {item.price} UAH / {item.measurement}</div>
                <div>Product number: {item.id}</div>
            </div>
        </div>
    );
};

export default CommodityItem;