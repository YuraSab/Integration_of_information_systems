import {
    ADD_TO_COMMODITY,
    DELETE_FROM_COMMODITY,
    ADD_TO_SERVICES,
    DELETE_FROM_SERVICES
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


