import React from 'react';
import {useDispatch} from "react-redux";
import {deleteFromServices, minusService, plusService,} from "../../../../../redux/action-creators";
import styles from "../../Commodity/SelectedCommodity/SelectedCommodity.module.css";
import deleteButton from "../../../../../icons/delete.png";

const SelectedServices = ({isHeading, item}) => {

    const dispatch = useDispatch();

    const onDeleteFromServices = () => {
        dispatch(deleteFromServices(item));
    };
    const onPlus = () => {
        // if (item.count <= 1) {
        dispatch(plusService(item));
        // }
    };
    const onMinus = () => {
        if (item.count !== 1) {
            dispatch(minusService(item));
        }
    };


    return (
        <div className={styles.estimateCommoditySelected}>

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
                        <div className={styles.plusMinus} onClick={onMinus}>-</div>
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
                    isHeading ? <div></div> : <img onClick={onDeleteFromServices} alt={"delete"} src={deleteButton}
                                                   className={styles.deleteButton}/>
                }
            </div>
        </div>
    );
};

export default SelectedServices;