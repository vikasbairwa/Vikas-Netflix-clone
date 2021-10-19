import React, { useState, useEffect } from 'react'
import Api from '../api/Api';
import './css/Trailer.css';
function Trailer({ mediaType, mediaId, onClose }) {
    const [id, setId] = useState(null);
    const url = Api(`/${mediaType}/${mediaId}/videos`);
    useEffect(() => {
        const fetchTrailer = async () => {
            const data = await fetch(url);
            let parsedData = await data.json();
            const video = parsedData.results.find(o => o.site === 'YouTube');
            setId(video?.key);
        }
        fetchTrailer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                {id && (
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        width="100%"
                        height="100%"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
                <button
                    className="close"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
        </>
    )
}

export default Trailer
