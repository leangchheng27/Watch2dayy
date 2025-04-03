import React from 'react';
import '../styles/aboutUs.css';
import Footer from '../components/Footer'; // Adjust the path based on your project structure
import Header from '../components/Header';

const AboutUs = () => {
    return (
        <>
            {/* Header Section */}
            <Header />
            {/* Team Section */}
            <section className="team">
                <div className="member">
                    <img src="/images/aboutUs/chheng.jpg" alt="Phorn Leangchheng" />
                    <h3>Phorn Leangchheng</h3>
                </div>
                <div className="member">
                    <img src="/images/aboutUs/hong.jpg" alt="Yan Kimhong" />
                    <h3>Yan Kimhong</h3>
                </div>
            </section>

            {/* About Section */}
            <div className="about">
                <h2>Welcome to Watch2Day your ultimate destination for everything movies!</h2>
                <p>We are a passionate team of cinephiles dedicated to bringing you the latest updates, reviews, and insights from the world of cinema. Whether you're a fan of Hollywood blockbusters, indie films, or international cinema, we have something for everyone.</p>
                <h3>-Why Choose Us?-</h3>
                <p>At Watch2Day, we strive to create a welcoming space for everyone who loves the magic of movies. Our team is committed to delivering quality content and keeping you entertained every step of the way.</p>
                <p>So grab your popcorn, dive in, and let's explore the world of cinema together!</p>
            </div>

            
            {/* Footer */}
            <Footer />  
        </>
    );
};

export default AboutUs;
