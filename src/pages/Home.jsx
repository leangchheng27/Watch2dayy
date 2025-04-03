import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate(); // Initialize navigate

    const [mainImage, setMainImage] = useState({
        title: "Supermen",
        description:
            "The epic conclusion to the Avengers saga. After the devastating events of Avengers: Infinity War, the surviving members of the Avengers and their allies must unite for one final battle against Thanos to undo the destruction and restore balance to the universe.",
        rating: 5,
    });

    // Award List Data
    const awards = [
        { title: "Oppenheimer", category: "Best Picture", image: "/images/awardList/a1.png" },
        { title: "The Zone of Interest", category: "Best International Feature Film", image: "/images/awardList/a2.png" },
        { title: "Robert Downey Jr.", category: "Best Supporting Actor", image: "/images/awardList/a3.png" },
        { title: "Poor Things", category: "Best Costume Design", image: "/images/awardList/a4.png" },
        { title: "Emma Stone", category: "Best Actress", image: "/images/awardList/a5.png" },
        { title: "The Boy and the Heron", category: "Best Animated Feature", image: "/images/awardList/a6.png" },
        { title: "Anatomy of a Fall", category: "Best Original Screenplay", image: "/images/awardList/a7.png" },
        { title: "20 Days in Mariupol", category: "Best Documentary Feature", image: "/images/awardList/a8.png" },
        { title: "Cillian Murphy", category: "Best Actor", image: "/images/awardList/a9.png" },
        { title: "Da'Vine Joy Randolph", category: "Best Supporting Actress", image: "/images/awardList/a10.png" },
        { title: "Godzilla Minus One", category: "Best Visual Effects", image: "/images/awardList/a11.png" },
        { title: "American Fiction", category: "Best Adapted Screenplay", image: "/images/awardList/a12.png" },
    ];

    // Handle "Watch Now" button click
    const handleWatchNow = () => {
        navigate('/movie-player', { state: { title: mainImage.title, video: '/movie.mp4' } });
    };

    // Handle "Trailer" button click
    const handleTrailer = () => {
        navigate('/movie-player', { state: { title: `${mainImage.title} - Trailer`, video: '/movie.mp4' } });
    };

    return (
        <>
            <Header />

            {/* Main Content */}
            <div className="contents">
                <div className="first-header">
                    {/* Video Background */}
                    <div className="video-background">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://drive.google.com/file/d/16d_g5pz3uUsaijXvS1RxqC3p8meZbibl/preview"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="Main Video"
                        ></iframe>
                    </div>

                    {/* Text Content */}
                    <div className="text-box">
                        <h1 id="main-title">{mainImage.title}</h1>
                        <div className="intro">
                            <p id="main-description">{mainImage.description}</p>
                        </div>
                        <div className="star-rating" id="main-rating">
                            {[...Array(mainImage.rating)].map((_, index) => (
                                <span key={index} className="star">
                                    &#9733;
                                </span>
                            ))}
                        </div>
                        <div className="button">
                            <button className="watch-now" onClick={handleWatchNow}>
                                Watch Now
                            </button>
                            <button className="trailer" onClick={handleTrailer}>
                                Trailer
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Award List */}
            <div className="award-listHeader">
                <h5>96th Academy Awards <span className="winner-text">/ Winners</span></h5>
            </div>
            <div className="award-list">
                {awards.map((award, index) => (
                    <div className="award-item" key={index}>
                        <img src={award.image} alt={award.title} />
                        <div className="name">
                            <h3>{award.title}</h3>
                            <p>{award.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </>
    );
};

export default Home;