import './Signin.css';
import React, { useState } from "react";
import axios from 'axios';
import backgroundImage from './assets/Image.png';
import googleIcon from './assets/icons8-google-48.png';
import hideIcon from './assets/icons8-hide-48.png';
import divider from './assets/divider.png';

const SignUp = () => {
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
        <div className="signin-container">
            <img src={backgroundImage} alt="Background" className="signin-background-image" />
            <div className="signin-form-container">
                <div className="signin-header">
                    <h3 style={{fontSize:'1.4rem'}}>Sign Up</h3>
                    <button className="google-signin-button">
                        <img src={googleIcon} alt="Google Icon" className="google-icon" />
                        Continue with Google
                    </button>
                </div>
                <div className="separator-container">
                    <hr className="horizontal-line" />
                    <span className="divider-text">or</span>
                    <hr className="horizontal-line" />
                </div>
                <form onSubmit={handleSubmit} className="signin-form">
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

                    <div>
                        <div className="password-section">
                            <label htmlFor="password" className="input-label">Password</label>
                            <button className="toggle-password-visibility-button">
                                <img src={hideIcon} alt="Hide Icon" className="hide-icon"/>UnHide</button>
                        </div>

                        <input 
                            id="password" 
                            type="password" 
                            className="input-field" 
                            name="userPassword"
                            value={user.userPassword}
                            onChange={handleInputChange}
                            required
                        />
                        <span className='font1'>Use 8 or more characters with a mix of letters</span><br/>
                    </div>

                    <button className="signin-button">Sign Up</button>
                    <p className="signup-prompt">
                        Already have an  account? <a href="/signin" className="signup-link">Log in</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
