import './Signin.css'
import image1 from './assets/bert-b-rhNff6hB41s-unsplash 1.png'
import googleIcon from './assets/icons8-google-48.png'

import '../navbar/Navbar.css'

const Signin = () =>{
    return (
        <div className="signin-container">
            <img src={image1} />
            <div className='signin-info'>
                <div className='signin-top'>
                    <h3>Sign in</h3>
                    <button><img src={googleIcon} style={{marginRight:'8px', width:'20px'}}/>Continue With Google</button>
                </div>
                <div className='signin-bottom'>
                    <label>Email Address</label>
                    <input type="email" />

                    <div>
                        <label>Email Address</label>
                        <button>Hide</button>
                    </div>

                    <input type="password" />
                    <a href='' style={{color:'#121212', fontSize:'.8rem'}}>Forget your password</a><br/>

                    <button className='btn-login'>Sign In</button>
                    <p style={{color:'#121212', fontSize:'.8rem'}}>Don’t have an account? <a href="" style={{color:'#121212'}}>Sign up</a>  </p>
                </div>
                
            </div>
        </div>
    )
}

export default Signin