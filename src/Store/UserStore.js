import { observable, action, makeObservable, computed } from 'mobx'
import axios from 'axios'

export default class UserStore {
    constructor() {
        this.name = ""
        this.username = ""
        this.isLogged = false
        makeObservable(this, {
            name: observable,
            username: observable,
            isLogged: observable,
            checkIfLoggedIn: action,
            logIn: action,
            setLoggedIn: action,
            setLoggedOut: action
        })
    }

     checkIfLoggedIn = ()=> {
        this.username = localStorage.getItem('username')
        this.isLogged = localStorage.getItem('isLogged')
    }

    setLoggedIn =(username)=> {
        localStorage.setItem("username", username)
        localStorage.setItem("isLogged", true)
        this.username = username
        this.isLogged = true
    }

    setLoggedOut() {
        localStorage.clear()
        this.username = ""
        this.isLogged = false
    }


    async logIn(username, password) {
        try {
            if (!username || !password) {
                alert("username or password is incorrect ")
                return
            }
            const response = await axios.post('/login', { username, password })
            if (response.data.err === 0) {
                this.setLoggedIn(username)
            }
        } catch (error) {
            console.log(error)
        }
    }

}
