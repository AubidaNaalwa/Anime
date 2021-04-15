import { observer, inject } from 'mobx-react'
import './NavBar.css'
function NavBar(props) {
    return (
        <div className="NavBar">
            <ul>
                <li><a className="active" href="/">Home</a></li>
                <li><a href="/Anime">My Anime</a></li>
                <li><a href="#contact">Contact</a></li>
                <li style={{ float: "right" }}><a onClick={props.userStore.setLoggedOut} href="/">LogOut</a></li>
            </ul>
        </div>

    );
}

export default inject("userStore")(observer(NavBar))
