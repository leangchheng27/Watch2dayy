import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cDramas, kDramas, hollywoodMovies } from '../data/data'; // Import data from data.js

const Search = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query'); // Get the search query from the URL
    const [movies, setMovies] = useState([]); // State to store the search results

    useEffect(() => {
        // Fetch and filter movies based on the search query
        const fetchMovies = () => {
            console.log('Fetching movies for query:', query);

            // Combine all movie categories into one array
            const allMovies = [...cDramas, ...kDramas, ...hollywoodMovies];

            // Filter movies based on the query
            const filteredMovies = allMovies.filter((movie) =>
                movie.title.toLowerCase().includes(query?.toLowerCase() || '')
            );

            setMovies(filteredMovies);
        };

        if (query) {
            fetchMovies();
        }
    }, [query]);

    return (
        <div className="search-results">
            <h2>Search Results for: "{query}"</h2>
            {movies.length > 0 ? (
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index}>
                            <h3>{movie.title}</h3>
                            <img src={movie.image} alt={movie.title} style={{ width: '200px', height: '300px' }} />
                            <video controls width="400">
                                <source src={movie.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No movies found for your search.</p>
            )}
        </div>
    );
};

export default Search;