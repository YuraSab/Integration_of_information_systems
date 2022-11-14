import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCommodity, addToServices, deleteFromCommodity, deleteFromServices} from "../../redux/action-creators";


const ConstructorComponent = () => {

    const {commodityMas, servicesMas} = useSelector(({commodityMas: {commodityMas}, servicesMas: {servicesMas}}) => ({commodityMas, servicesMas}));
    const dispatch = useDispatch();
    console.log(commodityMas, servicesMas);

    const onAddToCommodity = (item) => {
        dispatch(addToCommodity(item));
    };
    const onDeleteFromCommodity = (item) => {
        dispatch(deleteFromCommodity(item));
    };
    const onAddToServices = (item) => {
        dispatch(addToServices(item));
    };
    const onDeleteFromServices = (item) => {
        dispatch(deleteFromServices(item));
    };

    return (
        <div>

        </div>
    );
};

export default ConstructorComponent;