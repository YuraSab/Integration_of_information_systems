import React, {useMemo, useState} from 'react';
import {commodity} from "../../../../database";
import CommodityItem from "./CommodityItem";
import styles from "./CommodityList.module.css";
import CommodityCategories from "./Filters/CommodityCategories";
import CommodityTypes from "./Filters/CommodityTypes";

const CommodityList = () => {



    const [commodityCategory, setCommodityCategory] = useState("");
    const [commodityTypes, setCommodityTypes] = useState("");
    const masOfCommodityCategories = [{title: "Сантехніка", name: "Сантехніка"}, {title: "Підлога", name: "Підлога та покриття"}];
    const masOfCommodityTypes = [{title: "Кран", name: "Крани та умивальники"}, {title: "Ванна та душ", name: "Ванна та душ"}, {title: "Унітаз", name: "Унітази"}, {title: "Шланги", name: "Шланги та сіфони"}, {title: "Плитка", name: "Плитка"}, ];
    const [filteredList, setFilteredList] = useState(commodity);



    const commodityFiltered = useMemo(() => {
        // let filterList = commodity;
        if(commodityCategory !== ""){
            let filterList = commodity.filter(el => el.category === commodityCategory);
            setFilteredList(filterList);
        }
        if(commodityTypes !== ""){
            let filterList = commodity.filter(el => el.type === commodityTypes);
            setFilteredList(filterList);
        }
    }, [commodityCategory, commodityTypes]);

    return (
        <div>
            <div>
                <CommodityCategories
                    mas={masOfCommodityCategories}
                    setCommodityCategory={setCommodityCategory}
                    setCommodityTypes={setCommodityTypes}
                />
                <CommodityTypes
                    mas={masOfCommodityTypes}
                    setCommodityTypes={setCommodityTypes}
                    setCommodityCategory={setCommodityCategory}
                />
            </div>


            <div className={styles.listBlock}>
                {
                    filteredList
                    // filterList
                        .map(value => {
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