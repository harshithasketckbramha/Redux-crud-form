// import { createStoreHook } from "react-redux";
import { configureStore, createStore } from "redux";
import { reducerOne } from "./Reducer/Reducer";


export const myStore=createStore(reducerOne)