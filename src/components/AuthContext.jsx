import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Initialize localStorage with test data if it doesn't exist
    if (!localStorage.getItem('users')) {
        localStorage.setItem(
            'users',
            JSON.stringify([{ email: 'john@gmail.com', password: 'p123' }])
        );
    }

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (email, password) => {
        console.log('Authenticating user...'); // Debugging log
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log('Stored users:', users); // Debugging log
    
        const existingUser = users.find(
            (u) => u.email === email && u.password === password
        );
    
        if (existingUser) {
            console.log('User authenticated:', existingUser); // Debugging log
            setUser(existingUser);
            localStorage.setItem('user', JSON.stringify(existingUser));
            console.log('User state after login:', existingUser); // Debugging log
            return true;
        } else {
            console.log('Authentication failed'); // Debugging log
            alert('Invalid email or password');
            return false;
        }
    };

    const logout = () => {
        console.log('Logging out user...'); // Debugging log
        setUser(null);
        localStorage.removeItem('user');
    };

    const signUp = (email, password) => {
        console.log('Signing up user...'); // Debugging log
        const users = JSON.parse(localStorage.getItem('users')) || [];
        console.log('Existing users:', users); // Debugging log

        const existingUser = users.find((u) => u.email === email);

        if (existingUser) {
            console.log('User already exists:', email); // Debugging log
            alert('User already exists!');
            return false;
        }

        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        console.log('New user added:', newUser); // Debugging log
        return true;
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);