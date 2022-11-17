import {
    ADD_TO_COMMODITY,
    DELETE_FROM_COMMODITY,
    ADD_TO_SERVICES,
    DELETE_FROM_SERVICES,
    ADD_TO_MASSIVE_OF_ESTIMATES,
    DELETE_FROM_MASSIVE_OF_ESTIMATES,
    SET_COMMODITY_AND_SERVICES,
    CLEAR_ESTIMATE
} from "../action-types";


export const addToCommodity = (item) => ({
    type: ADD_TO_COMMODITY,
    payload: item
});

export const deleteFromCommodity = (item) => ({
    type: DELETE_FROM_COMMODITY,
    payload: item
});

export const addToServices = (item) => ({
    type: ADD_TO_SERVICES,
    payload: item
});

export const deleteFromServices = (item) => ({
    type: DELETE_FROM_SERVICES,
    payload: item
});


export const addToMassiveOfEstimates = (object) => ({
    type: ADD_TO_MASSIVE_OF_ESTIMATES,
    payload: object

});
export const deleteFromMassiveOfEstimates = (object) => ({
    type: DELETE_FROM_MASSIVE_OF_ESTIMATES,
    payload: object
});

export const setCommodityAndServices = (object) => ({
    type: SET_COMMODITY_AND_SERVICES,
    payload: object
});

export const clearEstimate = () => ({
    type: CLEAR_ESTIMATE,
});