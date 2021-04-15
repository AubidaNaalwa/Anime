
import { observer, inject } from 'mobx-react'
import { useEffect, useState } from 'react';
import './Home.css'

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Home(props) {
    const [searchVlaue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },3000)
    }, [])

    return (
        <div className="Home">
            {/* Arabic Manga Site
            Created By :Aubida Naalwa */}
            {
                loading     
             ?
                        <Loader
                            type="TailSpin"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                        :
                        <div className="Search" >
                            <input className="serachBar" type="text" value={searchVlaue} onChange={({ target }) => setSearchValue(target.value)} />
                            <button>Search</button>
                        </div>
            }

        </div>

    );
}

export default inject("userStore")(observer(Home))
