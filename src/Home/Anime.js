
import { observer, inject } from 'mobx-react'
import { useEffect, useState } from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import MediaCard from './MediaCard'

function Anime(props) {
    const [loading, setLoading] = useState(true)
    const loadData = async () => {
        await props.userStore.loadDataFromServer()
        setLoading(false)
    }
    useEffect(() => {
        loadData()
    }, [])

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
            <div className="SearchResults">
                {props.userStore.data &&props.userStore.data.length > 1 && props.userStore.data.map(v => <MediaCard title={v.title} image_url={v.image_url} />)}
            </div>



    )
}

export default inject("userStore")(observer(Anime))
