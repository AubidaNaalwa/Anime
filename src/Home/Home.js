
import { observer, inject } from 'mobx-react'
import { useEffect, useState } from 'react';
import './Home.css'
import MediaCard from './MediaCard'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Home(props) {
    const [searchVlaue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(true)
    const loadData = async () => {

        setTimeout(() => {

            setLoading(false)
        }, 3000)
    }
    useEffect(() => {
        loadData()

    }, [])

    const handleSearch = () => {
        props.userStore.loadData(searchVlaue)
    }

    return (


        loading
            ?
            <div className={"LoaderScreen"}>
                < Loader type="Oval" color="#00BFFF" secondaryColor="Green"
                    height={100}
                    width={100}
                />
            </div >
            :
            <div className="Home">
                {/* Arabic Manga Site
                Created By :Aubida Naalwa */}
                <div className="Search" >
                    <input className="serachBar" type="text" value={searchVlaue} onChange={({ target }) => setSearchValue(target.value)} />
                    <button onClick={handleSearch}>Search</button>
                    <div className="SearchResults">
                        {props.userStore.data && props.userStore.data.length > 1 && props.userStore.data.map(v => <MediaCard title={v.title} image_url={v.image_url} />)}
                    </div>
                </div>
            </div>



    );
}

export default inject("userStore")(observer(Home))
