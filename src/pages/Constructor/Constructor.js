import React from 'react';
import styles from "./Constructor.module.css";
import ConstructorComponent from "../../components/ConstructorComponent/ConstructorComponent";
import {useDispatch, useSelector} from "react-redux";
import {clearEstimate} from "../../redux/action-creators";

const Constructor = () => {

    const {commodityMas, servicesMas} = useSelector(({
                                                         commodityMas: {commodityMas},
                                                         servicesMas: {servicesMas}
                                                     }) => ({commodityMas, servicesMas}));
    const dispatch = useDispatch();

    const onClear = () => {
        dispatch(clearEstimate())
    }

    return (
        <div className={styles.main}>
            <div className={styles.constructor}>
                {
                    commodityMas.length < 1 && servicesMas.length < 1 ?
                        null
                        :
                        <div className={styles.newEstimateDiv}>
                            <button onClick={onClear} className={styles.newEstimateButton}>New estimate</button>
                        </div>
                }
                <ConstructorComponent/>
            </div>
        </div>
    );
};

export default Constructor;