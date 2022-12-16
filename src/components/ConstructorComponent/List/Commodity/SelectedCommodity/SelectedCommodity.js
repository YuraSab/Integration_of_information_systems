import React from 'react';
import styles from "./SelectedCommodity.module.css";
import deleteButton from "../../../../../icons/delete.png";
import {deleteFromCommodity, minusCommodity, plusCommodity} from "../../../../../redux/action-creators";
import {useDispatch} from "react-redux";

const SelectedCommodity = ({isHeading, item}) => {

    const dispatch = useDispatch();

    const onDeleteFromCommodity = () => {
        dispatch(deleteFromCommodity(item));
    };

    const onPlus = () => {
        // if (item.count <= 1) {
            dispatch(plusCommodity(item));
        // }
    };
    const onMinus = () => {
        if (item.count !== 1) {
            dispatch(minusCommodity(item));
        }
    };


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
                    isHeading ? <h3>Price per one</h3> :
                        <h4 style={{padding: "0 10px"}}>{item.price} UAH / {item.measurement}</h4>
                }
            </div>
            <div className={`${styles.amount} ${styles.flex}  ${styles.border}`}>
                {

                    isHeading ? <h3>Amount</h3> : <div>
                        <div className={styles.plusMinus}
                             onClick={onMinus}
                        >
                            -
                        </div>
                        <h4 style={{padding: "0 10px"}}>{item.count}</h4>
                        <div className={styles.plusMinus} onClick={onPlus}>+</div>
                    </div>

                }

            </div>
            <div className={`${styles.totalPrice}  ${styles.flex}  ${styles.border}`}>
                {
                    isHeading ? <h3>Total price</h3> :
                        <h4 style={{padding: "0 10px"}}>
                            {/*{item.price * item.amount} UAH*/}
                            {item.price * item.count} UAH
                        </h4>
                }
            </div>
            <div className={styles.deleteDiv}>
                {
                    isHeading ? <div></div> : <img onClick={onDeleteFromCommodity} alt={"delete"} src={deleteButton}
                                                   className={styles.deleteButton}/>
                }
            </div>
        </div>
    );
};

export default SelectedCommodity;