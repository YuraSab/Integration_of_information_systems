import React from 'react';
import styles from "./EstimateItem.module.css";
import {useDispatch} from "react-redux";
import {setCommodityAndServices} from "../../../redux/action-creators";
import {Link} from "react-router-dom";

const EstimatesItem = ({item}) => {

    const dispatch = useDispatch();

    const onOpen = () => {
        dispatch(setCommodityAndServices(item));
    }


    return (
        <div className={styles.main}>
            <div>
                id: {item.id}
            </div>
            <div>
                Price: {item.totally} UAH
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>

                <Link to={'/constructor'}>
            <button onClick={onOpen} className={styles.buttonOpen}>Open</button>
                </Link>
            </div>
        </div>
    );
};

export default EstimatesItem;