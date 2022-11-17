import React from 'react';
import {useDispatch} from "react-redux";
import {addToServices} from "../../../../redux/action-creators";
import styles from "./ServicesList.module.css";

const ServicesItem = ({item, disabled}) => {

    const dispatch = useDispatch();

    const onAddToServices = () => {
        dispatch(addToServices({...item, amount: 1}));
    };


    return (
        <div className={styles.itemBlock}>
            <div className={styles.title}>
                {item.name}
            </div>

            <div className={styles.description}>
                <div>Price: {item.price} UAH / {item.measurement}</div>
                <div>Product number: {item.id}</div>
                <div>
                    <button disabled={disabled} onClick={onAddToServices}>Add to estimate</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesItem;