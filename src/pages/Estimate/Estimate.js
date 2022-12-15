import React from 'react';
import {useSelector} from "react-redux";
import EstimatesItem from "../../components/Estimates/EstimateItem/EstimatesItem";
import styles from "./Estimate.module.css";

const Estimate = () => {

    const {massiveOfEstimates} = useSelector(({massiveOfEstimates: {massiveOfEstimates}}) => ({massiveOfEstimates}));


    return (
        <div className={styles.main}>
            {
                massiveOfEstimates.map(value =>
                    <EstimatesItem
                        item={value}
                        key={value.id}
                    />
                )
            }
        </div>
    );
};

export default Estimate;