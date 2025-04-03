import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import '../styles/Login.css'; // Reuse the same styles as Login
import logo from '../assets/Logo.png'; // Import the logo file

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signUp } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const success = signUp(email, password);
        if (success) {
            alert('Account created successfully!');
            navigate('/login');
        }
    };

    return (
        <div className="login-page">
            {/* Video Background */}
            <div className="video-background">
                <iframe
                    src="https://drive.google.com/file/d/1tr7nMJc00gCk2xd99TQAqq_bIvfTCUEl/preview"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Video Background"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                    }}
                ></iframe>
            </div>

            {/* SignUp Form */}
            <div className="login-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>

                {/* Watch2Day Logo */}
                <img src={logo} alt="Watch2Day Logo" className="login-logo" />
            </div>
        </div>
    );
};

export default SignUp;