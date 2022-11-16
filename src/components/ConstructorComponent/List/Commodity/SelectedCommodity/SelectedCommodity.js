import React from 'react';
import styles from "./SelectedCommodity.module.css";

const SelectedCommodity = ({isHeading, item}) => {
    return (
        <div className={styles.estimateCommoditySelected}>
            <div className={`${styles.image} ${styles.flex} ${styles.border}`}>
                {
                    isHeading ? <h3>Image</h3> : <img className={styles.picture} alt={item.title} src={item.photo}/>

                }
            </div>
            <div className={`${styles.title}  ${styles.flex} ${styles.border}`}>
                {
                    isHeading ? <h3>Title</h3> : <h4 style={{padding: "0 10px"}}>{item.name}</h4>
                }
            </div>
            <div className={`${styles.index}  ${styles.flex} ${styles.border}`}>
                {
                    isHeading ? <h3>Index</h3> : <h4 style={{padding: "0 10px"}}>{item.id}</h4>
                }
            </div>
            <div className={`${styles.pricePerOne}  ${styles.flex} ${styles.border}`}>
                {
                    isHeading ? <h3>Price per one</h3> : <h4 style={{padding: "0 10px"}}>{item.price} UAH / {item.measurement}</h4>
                }
            </div>
            <div className={`${styles.amount}  ${styles.flex} ${styles.border}`}>
                {
                    isHeading ? <h3>Amount</h3> : null
                }
            </div>
            <div className={`${styles.totalPrice}  ${styles.flex}`}>
                {
                    isHeading ? <h3>Total price</h3> : null
                }
            </div>
        </div>
    );
};

export default SelectedCommodity;