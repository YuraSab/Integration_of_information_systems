import {
    ADD_TO_COMMODITY,
    DELETE_FROM_COMMODITY,
    ADD_TO_SERVICES,
    DELETE_FROM_SERVICES,
    ADD_TO_MASSIVE_OF_ESTIMATES,
    DELETE_FROM_MASSIVE_OF_ESTIMATES,
    SET_COMMODITY_AND_SERVICES,
    CLEAR_ESTIMATE, ON_SELECT_EDIT_ESTIMATE, EDIT_ESTIMATE, PLUS_SERVICE, MINUS_SERVICE, PLUS_COMMODITY, MINUS_COMMODITY
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

export const onSelectEditEstimate = (object) => ({
    type: ON_SELECT_EDIT_ESTIMATE,
    payload: object
});

export const editEstimate = (object) => ({
   type: EDIT_ESTIMATE,
   payload: object
});



export const plusService = (object) => ({
    type: PLUS_SERVICE,
    payload: object
});

export const minusService = (object) => ({
    type: MINUS_SERVICE,
    payload: object
});

export const plusCommodity = (object) => ({
    type: PLUS_COMMODITY,
    payload: object
});

export const minusCommodity = (object) => ({
    type: MINUS_COMMODITY,
    payload: object
});
