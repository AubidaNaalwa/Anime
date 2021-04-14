
import { observer, inject } from 'mobx-react'
import { useState } from 'react';
import './Home.css'
function Home(props) {
    const [searchVlaue, setSearchValue] = useState('')

    return (
        <div className="Home">
            {/* Arabic Manga Site
            Created By :Aubida Naalwa */}
            <div className="Search" >
                <input className="serachBar" type="text" value={searchVlaue} onChange={({target})=>setSearchValue(target.value)}/>
                <button>Search</button>
            </div>
            
        </div>

    );
}

export default inject("userStore")(observer(Home))
