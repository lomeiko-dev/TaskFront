import {AxiosInstance} from "axios";

export interface IStore {

}

export type storeKey = keyof IStore;

export interface IExtraThunk {
    api: AxiosInstance,
}