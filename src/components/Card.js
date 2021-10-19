import React, { useState } from 'react'
import play_logo from './images/play-button.png'
import Trailer from './Trailer'
import './css/Card.css'


function Card(props) {
    const [hovered, setHovered] = useState(false);
    let { media, mediaType } = props;
    const [trailerClicked, setTrailerClicked] = useState(false)


    return (
        <div className="card"  >
            <div className="normal" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${media.poster_path})` }} onMouseOut={() => setHovered(false)} onMouseOver={() => setHovered(true)} >
                {<div className={hovered?"hovering":"blanc"}  onClick={() => setTrailerClicked(true)} >
                   <img src={play_logo} alt="png" />
                </div>}
                
            </div>
            <div className="trailer">
                    {trailerClicked && <Trailer
                    mediaType={mediaType}
                    mediaId={media.id}
                    media={media}
                    onClose={() => setTrailerClicked(false)}
                    />}
                </div>
        </div>
    )
}

export default Card
