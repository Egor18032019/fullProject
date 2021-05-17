import {makeAutoObservable,toJS} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = null
        this.userId = null
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
         this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return toJS(this._user)
    }
}
