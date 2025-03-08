import './Signin.css';
import backgroundImage from './assets/bert-b-rhNff6hB41s-unsplash 1.png';
import googleIcon from './assets/icons8-google-48.png';
import hideIcon from './assets/icons8-hide-48.png';
import divider from './assets/divider.png';

const SignIn = () => {
    return (
        <div className="signin-container">
            <img src={backgroundImage} alt="Background" className="signin-background-image" />
            <div className="signin-form-container">
                <div className="signin-header">
                    <h3 style={{fontSize:'1.4rem'}}>Sign in</h3>
                    <button className="google-signin-button">
                        <img src={googleIcon} alt="Google Icon" className="google-icon" />
                        Continue with Google
                    </button>
                </div>
                <img src={divider} alt="Divider Icon" className="divider-icon"/>
                <div className="signin-form">
                    <div>
                        <label htmlFor="email" className="input-label">Email Address</label>
                        <input id="email" type="email" className="input-field" />
                    </div>

                    <div>
                        <div className="password-section">
                            <label htmlFor="password" className="input-label">Password</label>
                            <button className="toggle-password-visibility-button">
                                <img src={hideIcon} alt="Hide Icon" className="hide-icon"/>UnHide</button>
                        </div>

                        <input id="password" type="password" className="input-field" />
                        <a href="#" className="forgot-password-link">Forgot your password?</a>
                    </div>

                    <button className="signin-button">Sign In</button>
                    <p className="signup-prompt">
                        Don’t have an account? <a href="#" className="signup-link">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
