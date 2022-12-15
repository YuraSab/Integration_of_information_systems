import React from 'react';
import styles from "./EstimateItem.module.css";
import {useDispatch} from "react-redux";
import {
    deleteFromMassiveOfEstimates,
    onSelectEditEstimate,
    setCommodityAndServices
} from "../../../redux/action-creators";
import {Link} from "react-router-dom";
import crossIcon from "../../../icons/cross.png";
import wrenchIcon from "../../../icons/wrench_icon.webp";

const EstimatesItem = ({item}) => {

    const dispatch = useDispatch();

    const onOpen = () => {
        dispatch(setCommodityAndServices(item));
    }
    const onDeleteEstimate = () => {
        dispatch(deleteFromMassiveOfEstimates(item));
    }
    const onEditEstimate = () => {
        dispatch(onSelectEditEstimate(item));
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
            <div className={styles.iconsDiv}>

                <img
                    alt={'crossIcon'}
                    src={crossIcon}
                    className={styles.crossIcon}
                    onClick={onDeleteEstimate}
                />

                <Link to={'/constructor'}>
                    <img
                        alt={'wrenchIcon'}
                        src={wrenchIcon}
                        className={styles.crossIcon}
                        onClick={onEditEstimate}
                    />
                </Link>

            </div>
        </div>
    );
};

export default EstimatesItem;