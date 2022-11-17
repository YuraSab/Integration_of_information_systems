import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addToCommodity,
    addToMassiveOfEstimates,
    addToServices,
    deleteFromCommodity,
    deleteFromServices
} from "../../redux/action-creators";
import styles from "./ConstructorComponent.module.css";
import SelectedCommodity from "./List/Commodity/SelectedCommodity/SelectedCommodity";
import SelectedServices from "./List/Services/SelectedServices/SelectedServices";

const AddService = React.lazy(() => import("./AddService"));
const AddCommodity = React.lazy(() => import("./AddCommodity"));

const ConstructorComponent = () => {

    const [commodityActive, setCommodityActive] = useState(false);
    const [servicesActive, setServicesActive] = useState(false);
    const {commodityMas, servicesMas} = useSelector(({
                                                         commodityMas: {commodityMas},
                                                         servicesMas: {servicesMas}
                                                     }) => ({commodityMas, servicesMas}));
    const dispatch = useDispatch();
    // console.log(commodityMas, servicesMas);

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

    const commodityToggle = () => {
        setCommodityActive(prevState => !prevState)
    }
    const servicesToggle = () => {
        setServicesActive(prevState => !prevState)
    }


    let initialValue = 0;
    let summaryCommodity = commodityMas.reduce(function (accumulator, currentValue) {

        return accumulator + currentValue.price * currentValue.amount
    }, initialValue);

    let summaryServices = servicesMas.reduce(function (accumulator, currentValue) {

        return accumulator + currentValue.price * currentValue.amount
    }, initialValue);

    const totalSum = summaryCommodity + summaryServices;




    const {massiveOfEstimates} = useSelector(({massiveOfEstimates: {massiveOfEstimates}}) => ({massiveOfEstimates}));
    // console.log(massiveOfEstimates)
    const saveEstimate = () => {
        const objectOfEstimate = {
            id: massiveOfEstimates.length+1,
            commodityMas: commodityMas,
            servicesMas: servicesMas,
            totally: totalSum
        }
        dispatch(addToMassiveOfEstimates(objectOfEstimate))
    }

    return (


        <div className={styles.main}>

            <div className={styles.onTitle}>
                <h1 style={{paddingLeft: 20}}>Products</h1>
            </div>
            <div>
                {
                    commodityMas.length > 0 ?
                        <SelectedCommodity
                            isHeading={true}
                        />
                        :
                        null
                }
                {
                    commodityMas.map(item => {
                        return (
                            <SelectedCommodity
                                item={item}
                                key={item.id}
                                isHeading={false}
                            />
                        )
                    })
                }
            </div>
            <div
                className={styles.onAdd}
                onClick={commodityToggle}
            >
                <h3 style={{paddingLeft: 20, cursor: "pointer"}}>+ Add product</h3>
            </div>

            <div className={styles.onTitle}>
                <h1 style={{paddingLeft: 20}}>Services</h1>
            </div>

            <div>
                {
                    servicesMas.length > 0 ?
                        <SelectedServices
                            isHeading={true}
                        />
                        :
                        null
                }
                {
                    servicesMas.map(item => {
                        return (
                            <SelectedServices
                                item={item}
                                key={item.id}
                                isHeading={false}
                            />
                        )
                    })
                }
            </div>

            <div
                className={styles.onAdd}
                onClick={servicesToggle}
            >
                <h3 style={{paddingLeft: 20, cursor: "pointer"}}>+ Add service</h3>
            </div>
            <div className={styles.totalSummary}>
                <div className={styles.totalSum} style={{borderRight: "2px black dashed"}}>Total sum:</div>
                <div className={styles.totalSum}>{totalSum} UAH</div>
            </div>

            <button className={styles.saveEstimate}
                 onClick={saveEstimate}
            >
                Save estimate
            </button>

            <div>
                {
                    commodityActive ? <AddCommodity commodityToggle={commodityToggle}/> : null
                }
            </div>
            <div>
                {
                    servicesActive ? <AddService servicesToggle={servicesToggle}/> : null
                }
            </div>

        </div>
    );
};

export default ConstructorComponent;