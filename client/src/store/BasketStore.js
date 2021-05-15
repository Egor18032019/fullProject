import {
    makeAutoObservable,
    toJS
} from "mobx";

export default class BasketStore {
    constructor() {
        this._items = []
        this._null = {}
        makeAutoObservable(this)
    }

    setItem(device) {
        // гребанная магия
        const bar = this._items
        // СДЕЛАТЬ что бы не было повторяющихся значений в массиве..
        const foo = [...bar, device]
        this._items = foo
    }

    get basketItems() {
        return toJS(this._items)
    }
}