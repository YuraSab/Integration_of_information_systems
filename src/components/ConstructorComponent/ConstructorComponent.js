import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCommodity, addToServices, deleteFromCommodity, deleteFromServices} from "../../redux/action-creators";
import styles from "./ConstructorComponent.module.css";
import SelectedCommodity from "./List/Commodity/SelectedCommodity/SelectedCommodity";

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
    return (
        <div className={styles.main}>

            <div>
                <SelectedCommodity
                    isHeading={true}
                />
                {
                    commodityMas.map(item => {
                        return (
                                <SelectedCommodity
                                    item = {item}
                                    key= {item.id}
                                    isHeading = {false}
                                />
                        )
                    })
                }
            </div>
            <div
                className={styles.onAdd}
                onClick={commodityToggle}
            >
                <div style={{paddingLeft: 20}}>Add product</div>
            </div>

            <div>
                {/*<SelectedCommodity*/}
                {/*    isHeading={true}*/}
                {/*/>*/}

                {
                    servicesMas.map(value => {
                        return (
                            <div>sdasd</div>
                        )
                    })
                }
            </div>
            <div
                className={styles.onAdd}
                onClick={servicesToggle}
            >
                <div style={{paddingLeft: 20}}>Add service</div>
            </div>


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