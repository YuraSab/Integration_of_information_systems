import React, {useMemo, useState} from 'react';
import {services} from "../../../../database";
import {useSelector} from "react-redux";
import styles from "./ServicesList.module.css";
import ServicesCategories from "./Filters/ServicesCategories";
import ServicesItem from "./ServicesItem";

const ServicesList = () => {

    const [servicesCategory, setServicesCategory] = useState("");
    const masOfServicesCategories = [{title: "Підлога", name: "Підлога та покриття"}, {title: "Електромонтажні роботи", name: "Електромонтажні роботи"}, {title: "Стеля та стіни", name: "Стеля та стіни"}, {title: "Сантехніка", name: "Сантехніка"}];
    const [filteredList, setFilteredList] = useState(services);
    const {servicesMas} = useSelector(({servicesMas: {servicesMas}}) => ({servicesMas}));

    const commodityFiltered = useMemo(() => {
        if(servicesCategory !== ""){
            let filterList = services.filter(el => el.category === servicesCategory);
            setFilteredList(filterList);
        }
    }, [servicesCategory]);

    return (
        <div>
            <div>
                <ServicesCategories
                    mas={masOfServicesCategories}
                    setServicesCategory={setServicesCategory}
                />
            </div>
            <div className={styles.listBlock}>
                {
                    filteredList
                        .map(value => {
                            const filtered = servicesMas.filter(el => el.id !== value.id);
                            const disabled = filtered.length !== servicesMas.length;

                            return (
                                <ServicesItem
                                    key={value.id}
                                    item={value}
                                    disabled ={disabled}
                                />
                            )
                        })
                }
            </div>
        </div>
    );
};

export default ServicesList;