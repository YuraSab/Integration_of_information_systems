import {
    ADD_TO_COMMODITY,
    ADD_TO_SERVICES,
    DELETE_FROM_COMMODITY,
    DELETE_FROM_SERVICES
} from "../action-types";

const initialState = {
    commodityMas: [],
    servicesMas: [],
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
                commodityMas: [...state.commodityMas, action.payload]
            }
        }
        case DELETE_FROM_SERVICES: {
            const edited = state.commodityMas.filter(el => el.id !== action.payload.id)

            return {
                ...state,
                commodityMas: edited
            }
        }

        default: {
            return state
        }
    }
}