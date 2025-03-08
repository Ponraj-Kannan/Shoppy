import { useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    // Using useNavigate to get the navigate function
    const navigate = useNavigate();

    // Navigation functions
    const navToSignUp = () => {
        navigate('/signup');
    };
    const navToSignIn = () => {
        navigate('/signin');
    };

    return (
        <div className="navbar">
            <div className="nav-brand">
                Shoppy
            </div>
            <div className="nav-left">
                <p>
                    English (United States)
                </p>
                <button className="btn-login" onClick={navToSignIn}>
                    Login
                </button>
                <button className="btn-signUp" onClick={navToSignUp}>
                    SignUp
                </button>
            </div>
        </div>
    );
};

export default Navbar;
