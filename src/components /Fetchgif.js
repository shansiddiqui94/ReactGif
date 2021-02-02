import {useState, useEffect} from 'react'
import axios from axios

function Fetchgif() {
    const [gif, setGif] = useState("")
    const getGiphy = async () =>{
        const giphy = await axios.get(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_API_KEY}`)
        setGif(getGiphy)
    }
    console.log(gif.data.data.url)

    useEffect(()=>{
        Fetchgif()
    },[])
return(
    <div>
        <button onClick={}></button>
    
    </div>
)
}