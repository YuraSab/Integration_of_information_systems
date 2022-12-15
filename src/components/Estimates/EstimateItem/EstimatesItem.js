import React from 'react';
import styles from "./EstimateItem.module.css";
import {useDispatch} from "react-redux";
import {deleteFromMassiveOfEstimates, setCommodityAndServices} from "../../../redux/action-creators";
import {Link} from "react-router-dom";
import crossIcon from "../../../icons/cross.png";

const EstimatesItem = ({item}) => {

    const dispatch = useDispatch();

    const onOpen = () => {
        dispatch(setCommodityAndServices(item));
    }
    const onDeleteEstimate = () => {
        dispatch(deleteFromMassiveOfEstimates(item));
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
            <img
                alt={'crossIcon'}
                src={crossIcon}
                className={styles.crossIcon}
                onClick={onDeleteEstimate}
            />
        </div>
    );
};

export default EstimatesItem;