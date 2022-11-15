import React from 'react';
import {commodity} from "../../../../database";
import CommodityItem from "./CommodityItem";
import styles from "./CommodityList.module.css";

const CommodityList = () => {


    return (
        <div>
            <div className={styles.listBlock}>
                {
                    commodity.map(value => {
                        return (
                            <CommodityItem
                                key={value.id}
                                item={value}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CommodityList;