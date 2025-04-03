import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import '../styles/Login.css';
import logo from '../assets/Logo.png'; // Import the logo file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Please fill in all fields!');
            return;
        }

        const success = login(email, password);
        if (success) {
            alert('Login successful!');
            navigate('/home'); // Redirect to the home page
        } else {
            alert('Invalid email or password');
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

            {/* Login Form */}
            <div className="login-container">
                <h2>Login</h2>
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
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>

                {/* Watch2Day Logo */}
                <img src={logo} alt="Watch2Day Logo" className="login-logo" />
            </div>
        </div>
    );
};

export default Login;