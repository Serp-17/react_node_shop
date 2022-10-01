import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Test 1"},
            {id: 2, name: "Test 1"}
        ];
        this._devices = [
            {id: 1, name: "Test 1", price: 20000, rating: 4, img: "llll"},
            {id: 2, name: "Test 1", price: 20000, rating: 4, img: "llll"}
        ];
        this._brands = [
            {id: 1, name: "Test 1"},
            {id: 2, name: "Test 1"}
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    get types() {
        return this._types;
    } 

    get devices() {
        return this._devices;
    }

    get brands() {
        return this._brands;
    }
};