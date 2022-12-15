import {
    ADD_TO_COMMODITY, ADD_TO_MASSIVE_OF_ESTIMATES,
    ADD_TO_SERVICES, CLEAR_ESTIMATE,
    DELETE_FROM_COMMODITY, DELETE_FROM_MASSIVE_OF_ESTIMATES,
    DELETE_FROM_SERVICES, EDIT_ESTIMATE, ON_SELECT_EDIT_ESTIMATE, SET_COMMODITY_AND_SERVICES
} from "../action-types";

const initialState = {
    commodityMas: [],
    servicesMas: [],
    massiveOfEstimates: [],
    editing: false
}


export default (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_COMMODITY: {
            return {
                ...state,
                commodityMas: [...state.commodityMas, action.payload]
            }
        }
        case DELETE_FROM_COMMODITY: {
            const edited = state.commodityMas.filter(el => el.id !== action.payload.id)
            return {
                ...state,
                commodityMas: edited
            }
        }
        case ADD_TO_SERVICES: {
            return {
                ...state,
                servicesMas: [...state.servicesMas, action.payload]
            }
        }
        case DELETE_FROM_SERVICES: {
            const edited = state.servicesMas.filter(el => el.id !== action.payload.id)
            return {
                ...state,
                servicesMas: edited
            }
        }
        case ADD_TO_MASSIVE_OF_ESTIMATES: {
            return {
                ...state,
                massiveOfEstimates: [...state.massiveOfEstimates, action.payload],
                commodityMas: [],
                servicesMas: []
            }
        }
        case DELETE_FROM_MASSIVE_OF_ESTIMATES: {
            const filtered = state.massiveOfEstimates.filter(el => el.id !== action.payload.id);
            return {
                ...state,
                massiveOfEstimates: filtered
            }
        }
        case SET_COMMODITY_AND_SERVICES: {
            return {
                ...state,
                commodityMas: action.payload.commodityMas,
                servicesMas:  action.payload.servicesMas
            }
        }
        case CLEAR_ESTIMATE: {
            return {
                ...state,
                commodityMas: [],
                servicesMas:  []
            }
        }
        case ON_SELECT_EDIT_ESTIMATE: {
            return {
                ...state,
                editing: action.payload.id,
                commodityMas: action.payload.commodityMas,
                servicesMas:  action.payload.servicesMas
            }
        }

        case EDIT_ESTIMATE: {
            const filtered = state.massiveOfEstimates.filter(el => el.id !== action.payload.id);
            const added = [...filtered, action.payload];
            const sorted = added.sort((a, b) => a.id - b.id);
            return {
                ...state,
                massiveOfEstimates: sorted,
                editing: false,
                commodityMas: [],
                servicesMas:  [],
            }
        }

        default: {
            return state
        }
    }
}