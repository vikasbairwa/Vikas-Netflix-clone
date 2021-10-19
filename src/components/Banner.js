import React, { useState, useEffect } from 'react'
import Helper from '../api/genre';
import './css/Banner.css'

function Banner() {
    const ApiKey = process.env.REACT_APP_API;
    const BaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key="
    const [bannerMovie, setBannerMovie] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            const url = `${BaseUrl}${ApiKey}`
            let data = await fetch(url);
            let parsedData = await data.json();

            setBannerMovie(
                parsedData.results[
                Math.floor(Math.random() * parsedData.results.length + 1)
                ]
            );
        }
        fetchMovie();
        // eslint-disable-next-line
    }, [])


    return (

        <div className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${!bannerMovie.backdrop_path ?'/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg': bannerMovie.backdrop_path})` }} >
            <div className="content">

                <h1 className="title">{bannerMovie.title ? bannerMovie.title : bannerMovie.original_title}</h1>
                <div className="buttons">
                    <div type="button" id="play">Play</div>
                    <div type="button" id="myList">My List</div>
                </div>
                <div className="overview">{bannerMovie.overview ? bannerMovie.overview.split('.')[0] : ''}</div>
            </div>
            <div className="gradient" />
            <div className="gradient2" />
        </div>
    )
}

export default Banner
