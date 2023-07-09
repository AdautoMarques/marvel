import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import axios from 'axios';
export const Main = () => {
   
    const [url,setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=31d6ce7074b505163077450de1f7afd7&hash=44be2935933709aa13467a05f35c6635")
    const [item, setItem] = useState();
    useEffect(() => {
        const fetch = async() =>{
            const res = await axios.get(url)
            setItem(res.data.data.results)
        }
        fetch()

    },[url])
    return(
        <>
            <div className='header'>
                <div className='bg'>
                    <img src='./Images/bg.webp' alt='' />
                </div>
                <div className='search-bar'>
                    <img src='./Images/logo.png' alt='logo' width="320px" height="70px" />
                    <input type='search' placeholder='Pesquise Herois' className='search'/>
                </div>
            </div>

            <div className='content'>
                
                {
                    (!item)? <p>Not Found</p>:<Card  data={item}/>
                }
            </div>
        
        
        </>
    )
}