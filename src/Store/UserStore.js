import { observable, action, makeObservable, computed } from 'mobx'
import axios from 'axios'

export default class UserStore {
    constructor() {
        this.name = ""
        this.username = ""
        this.isLogged = false
        this.data = []
        makeObservable(this, {
            name: observable,
            username: observable,
            isLogged: observable,
            checkIfLoggedIn: action,
            logIn: action,
            setLoggedIn: action,
            setLoggedOut: action,
            loadDataFromServer: action,
            data: observable,
            addDataToDB: action
        })
    }

    checkIfLoggedIn = () => {
        this.username = localStorage.getItem('username')
        this.isLogged = localStorage.getItem('isLogged')
    }

    setLoggedIn = (username) => {
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

    loadDataFromServer = async () => {
        try {
            const results = await axios.post('/data', {
                username: this.username
            })
            this.data = results.data.data
        } catch (error) {
            console.log(error)
        }
    }

    addDataToDB = async (data) => {
        try {
            const results = await axios.post('/adddata', {
                username: this.username,
                ...data
            })
            this.data = results.data.data
            await this.loadDataFromServer()
        } catch (error) {
            console.log(error)
        }
    }
}
