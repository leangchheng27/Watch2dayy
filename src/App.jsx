import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Home page
import Login from './pages/Login'; // Login page
import SignUp from './pages/SignUp'; // SignUp page
import AboutUs from './pages/AboutUs'; // About Us page
import CDrama from './pages/CDrama'; // CDrama page
import KDrama from './pages/KDrama'; // KDrama page
import Hollywood from './pages/Hollywood'; // Hollywood page
import Search from './components/Search'; // Search component
import MoviePlayer from './pages/MoviePlayer'; // MoviePlayer page
import { AuthProvider } from './components/AuthContext'; // AuthContext for authentication
import PrivateRoute from './components/PrivateRoute'; // PrivateRoute for protected routes

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Redirect root route to Login */}
                    <Route path="/" element={<Navigate to="/login" />} />

                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />

                    {/* Protected Routes */}
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/about-us"
                        element={
                            <PrivateRoute>
                                <AboutUs />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/cdrama"
                        element={
                            <PrivateRoute>
                                <CDrama />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/kdrama"
                        element={
                            <PrivateRoute>
                                <KDrama />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/hollywood"
                        element={
                            <PrivateRoute>
                                <Hollywood />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/search"
                        element={
                            <PrivateRoute>
                                <Search />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/movie-player"
                        element={
                            <PrivateRoute>
                                <MoviePlayer />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;