import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/MoviePlayer.css';

const MoviePlayer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title, video } = location.state || {};

    console.log("MoviePlayer received:", { title, video }); // Debugging

    if (!title || !video) {
        return (
            <div className="movie-player">
                <p>Movie data is not available. Please go back and try again.</p>
                <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
            </div>
        );
    }

    return (
        <div className="movie-player">
            <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
            <h2>{title}</h2>
            <video controls width="100%" height="auto">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default MoviePlayer;