import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Refrigerator"},
            {id: 2, name: "Phone"}
        ];
        this._devices = [
            {id: 1, name: "Iphone Xr", price: 20000, rating: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktuhyAwLDlSCas4Dch5djKakCkL24QRwwCNDJZEu0u1ymR8zIEjcxz3MbFkv2KwBEE8U&usqp=CAU"},
            {id: 2, name: "Samsung s20", price: 20000, rating: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktuhyAwLDlSCas4Dch5djKakCkL24QRwwCNDJZEu0u1ymR8zIEjcxz3MbFkv2KwBEE8U&usqp=CAU"},
            {id: 3, name: "Samsung s20", price: 20000, rating: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktuhyAwLDlSCas4Dch5djKakCkL24QRwwCNDJZEu0u1ymR8zIEjcxz3MbFkv2KwBEE8U&usqp=CAU"},
            {id: 4, name: "Samsung s20", price: 20000, rating: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktuhyAwLDlSCas4Dch5djKakCkL24QRwwCNDJZEu0u1ymR8zIEjcxz3MbFkv2KwBEE8U&usqp=CAU"},
            {id: 5, name: "Samsung s20", price: 20000, rating: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktuhyAwLDlSCas4Dch5djKakCkL24QRwwCNDJZEu0u1ymR8zIEjcxz3MbFkv2KwBEE8U&usqp=CAU"},
            {id: 6, name: "Samsung s20", price: 20000, rating: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktuhyAwLDlSCas4Dch5djKakCkL24QRwwCNDJZEu0u1ymR8zIEjcxz3MbFkv2KwBEE8U&usqp=CAU"},
            {id: 7, name: "Samsung s20", price: 20000, rating: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktuhyAwLDlSCas4Dch5djKakCkL24QRwwCNDJZEu0u1ymR8zIEjcxz3MbFkv2KwBEE8U&usqp=CAU"},
            {id: 8, name: "Samsung s20", price: 20000, rating: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktuhyAwLDlSCas4Dch5djKakCkL24QRwwCNDJZEu0u1ymR8zIEjcxz3MbFkv2KwBEE8U&usqp=CAU"},
        ];
        this._brands = [
            {id: 1, name: "Honor"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Samsung"}
        ];
        this._selectedType = {};
        this._selectedBrand = {};
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
 
    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
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

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
};