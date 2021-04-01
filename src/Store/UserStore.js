import { observable, action, makeObservable, computed } from 'mobx'


export default class UserStore {
    constructor() {
        this.name = ""
        this.username = ""
        this.isLogged = false
        makeObservable(this, {
            name: observable,
            username: observable,
            isLogged: observable,
            checkIfLoggedIn: computed,
            setLoggedIn: action,
            setLoggedOut: action
        })
    }

    get checkIfLoggedIn() {
        const username = localStorage.getItem('username')
        const isLoggged = localStorage.getItem('isLogged')
        if (!username || !isLoggged) {
            this.setLoggedOut()
            return false
        }
        else {
            this.setLoggedIn(username)
            return true
        }
    }

    setLoggedIn(username) {
        localStorage.setItem("username", username)
        this.username = username
        this.isLogged = true
    }

    setLoggedOut() {
        localStorage.clear()
        this.username = ""
        this.isLogged = false
    }


}