import React, { useState, useEffect } from 'react'
import Card from './Card'
import Api from '../api/Api'
import './css/Slider.css'


function Slider({ mediasType, title, searchpath, params = {} }) {
    const [medias, setmedias] = useState([])
    const url = Api(searchpath, params);

    useEffect(() => {
        const fetchmedias = async () => {
            let data = await fetch(url);
            let parsedData = await data.json();
            setmedias(parsedData.results);
        }
        fetchmedias();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="slider">
            <h2>{title}</h2>
            <div className="cards">
                {medias.map((element) => (
                    
                        <Card key={element.id} media={element} mediaType={element.media_type || mediasType} />
                    
                ))}
            </div>
        </div>
    )
}

export default Slider

