import React from 'react';
import styles from "./CommodityList.module.css";
import {addToCommodity} from "../../../../redux/action-creators";
import {useDispatch} from "react-redux";

const CommodityItem = ({item}) => {


    const dispatch = useDispatch();

    const onAddToCommodity = () => {
        dispatch(addToCommodity({...item, amount: 1}));
    };



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
                <div>
                    <button onClick={onAddToCommodity}>Add to estimate</button>
                </div>
            </div>
        </div>
    );
};

export default CommodityItem;