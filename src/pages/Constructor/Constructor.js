import React from 'react';
import styles from "./Constructor.module.css";
import ConstructorComponent from "../../components/ConstructorComponent/ConstructorComponent";
import {useDispatch, useSelector} from "react-redux";
import {addToMassiveOfEstimates} from "../../redux/action-creators";

const Constructor = () => {



    return (
        <div className={styles.main}>
            <div className={styles.constructor}>

                <ConstructorComponent/>
            </div>
        </div>
    );
};

export default Constructor;