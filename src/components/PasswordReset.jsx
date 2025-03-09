import './Signin.css';
import React, { useState } from "react";
import axios from 'axios';
import backgroundImage from './assets/Image.png';
import googleIcon from './assets/icons8-google-48.png';
import hideIcon from './assets/icons8-hide-48.png';
import divider from './assets/divider.png';

const PasswordReset = () => {
    const [user, setUser] = useState({
        userId: 0, // This would typically be auto-generated on the backend
        userName: "",
        userEmail: "",
        userPassword: "",
        gender: "",
        sizePreferences: [],
        favoriteBrands: [],
        phone: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send the user object to the Spring Boot backend using axios
        axios
        .post("http://localhost:8080/api/user", user) // Replace with your Spring Boot endpoint
        .then((response) => {
        console.log("User data submitted successfully:", response.data);
        })
        .catch((error) => {
        console.error("There was an error submitting the user data:", error);
        });

        console.log(user);
    };

    return (
        <div className="password-reset-container">
            <img src={backgroundImage} alt="Background" className="password-reset-background-image" />
            <div className="password-reset-form-container">
            <div className="password-reset-header">
                <h3 className="password-reset-title">Reset Your Password</h3>
                <p className="password-reset-instruction">
                    Enter your email and we'll send you a link to reset your password.
                </p>
            </div>

                <form onSubmit={handleSubmit} className="password-reset-form">
                    <div>
                        <label htmlFor="email" className="input-label">Email Address</label>
                        <input 
                            id="email" 
                            type="email" 
                            className="input-field"
                            name="userEmail"
                            value={user.userEmail}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button className="password-reset-button">Send</button>
                    <p className="signin-prompt">
                        Back to <a href="/signin" className="signup-link">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;
