import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/hollywood.css';
import { hollywoodMovies } from '../data/hollywoodMovies';

const Hollywood = () => {
    const navigate = useNavigate(); // Initialize navigate
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 12;

    const sliderRef = useRef(null);
    const progressBarRef = useRef(null);

    const sliderMovies = hollywoodMovies.slice(0, 12);

    // Handle "Watch Now" and "Watch Trailer" button clicks
    const handlePosterClick = (movie, isTrailer = false) => {
        if (movie.video) {
            if (isTrailer) {
                alert(`Trailer for ${movie.title} is not available.`); // Replace with trailer logic if needed
            } else {
                navigate('/movie-player', { state: { title: movie.title, video: movie.video } });
            }
        } else {
            alert('Video not available for this movie.');
        }
    };

    // Handle slider movement
    const handleSliderClick = (direction) => {
        const slider = sliderRef.current;
        const progressBar = progressBarRef.current;
        const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));
        const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"));
        const itemCount = slider.children.length;
        const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

        let newIndex = sliderIndex;

        if (direction === "left") {
            newIndex = sliderIndex - 1 < 0 ? progressBarItemCount - 1 : sliderIndex - 1;
        } else if (direction === "right") {
            newIndex = sliderIndex + 1 >= progressBarItemCount ? 0 : sliderIndex + 1;
        }

        slider.style.setProperty("--slider-index", newIndex);

        // Update progress bar
        Array.from(progressBar.children).forEach((barItem, index) => {
            barItem.classList.toggle("active", index === newIndex);
        });
    };

    // Initialize progress bar
    const initializeProgressBar = () => {
        const slider = sliderRef.current;
        const progressBar = progressBarRef.current;
        const itemsPerScreen = parseInt(getComputedStyle(slider).getPropertyValue("--items-per-screen"));
        const itemCount = slider.children.length;
        const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

        progressBar.innerHTML = ""; // Clear existing progress bar items

        for (let i = 0; i < progressBarItemCount; i++) {
            const barItem = document.createElement("div");
            barItem.classList.add("progress-item");
            if (i === 0) barItem.classList.add("active");
            progressBar.appendChild(barItem);
        }
    };

    // Initialize progress bar on mount and resize
    useEffect(() => {
        initializeProgressBar();
        window.addEventListener("resize", initializeProgressBar);

        return () => {
            window.removeEventListener("resize", initializeProgressBar);
        };
    }, []);

    // Calculate movies for the current page
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = hollywoodMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    // Total number of pages
    const totalPages = Math.ceil(hollywoodMovies.length / moviesPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Header />

            {/* Slider Section */}
            <div className="row">
                <div className="container">
                    {/* Left Navigation Button */}
                    <button className="handle left-handle" onClick={() => handleSliderClick("left")}>
                        <div className="text">&#8249;</div>
                    </button>

                    {/* Slider */}
                    <div className="slider" ref={sliderRef}>
                        {sliderMovies.map((movie, index) => (
                            <div className="imgContainer" key={index}>
                                <img src={movie.image} alt={movie.title} />
                                <div className="content">
                                    <h1>{movie.title}</h1>
                                    <h2>{movie.subtitle || "Subtitle"}</h2>
                                    <p>{movie.description || "Description goes here."}</p>
                                    <div className="button">
                                        <button className="watch-now" onClick={() => handlePosterClick(movie)}>Watch Now</button>
                                        <button className="trailer" onClick={() => handlePosterClick(movie)}>Watch Trailer</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Navigation Button */}
                    <button className="handle right-handle" onClick={() => handleSliderClick("right")}>
                        <div className="text">&#8250;</div>
                    </button>
                </div>
                {/* Progress Bar */}
                <div className="progress-bar" ref={progressBarRef}></div>
            </div>

            {/* Hollywood Movies Section */}
            <div className="sliderHeader">
                <h2>HOLLYWOOD</h2>
            </div>
            <div className="content-container">
                {currentMovies.map((movie, index) => (
                    <div className="card" key={index}>
                        <a href={movie.video || "#"} target="_blank" rel="noopener noreferrer">
                            <img src={movie.image} alt={movie.title} />
                            <b><p>{movie.title}</p></b>
                        </a>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <div
                        key={index}
                        className={`page ${currentPage === index + 1 ? "active" : ""}`}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
};

export default Hollywood;