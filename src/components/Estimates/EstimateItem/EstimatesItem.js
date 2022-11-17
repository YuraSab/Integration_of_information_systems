import React from 'react';
import styles from "./EstimateItem.module.css";

const EstimatesItem = ({item}) => {


    return (
        <div className={styles.main}>
            <div>
                id: {item.id}
            </div>
            <div>
                Price: {item.totally} UAH
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>

            <button className={styles.buttonOpen}>Open</button>
            </div>
        </div>
    );
};

export default EstimatesItem;