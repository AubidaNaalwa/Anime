import { observer, inject } from 'mobx-react'
import './NavBar.css'
function NavBar(props) {


    return (
        <div className="NavBar">
            <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

    );
}

export default inject("userStore")(observer(NavBar))
