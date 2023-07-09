import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export const Marvel = () => {
    const {id} = useParams();
    const [item,setItem] = useState()
    const fetch = async() =>{
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=31d6ce7074b505163077450de1f7afd7&hash=44be2935933709aa13467a05f35c6635`)
        setItem(res.data.data.results[0])
    }
    fetch();
    return(
        <>
            {
                (!item)? "":(
                    <div className="box-content">
                        <div className="right-box">
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                        </div>
                        <div className="left-box">
                            <h1>{item.name}</h1>
                            <h4>{item.description}</h4>
                        </div>

                    </div>
                )
            }
        </>

    )
}