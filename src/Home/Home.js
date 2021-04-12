
import { observer, inject } from 'mobx-react'
import NavBar from './NavBar'
function Home(props) {
    

    return (
        <div className="Home">
            <NavBar />
        </div>

    );
}

export default inject("userStore")(observer(Home))
