import constructor from "./Constructor";
import {combineReducers} from "redux";

export const reducers = combineReducers({
    commodityMas: constructor,
    servicesMas: constructor,
    massiveOfEstimates: constructor
});