import './Navbar.css'

const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="nav-brand">
                Shoppy
            </div>
            <div className="nav-left">
                <p>
                    English (united States)
                </p>
                <button className='btn-login'>
                    Login
                </button>
                <button className='btn-signUp'>
                    SignUp
                </button>
            </div>
        </div>
    )
}

export default Navbar