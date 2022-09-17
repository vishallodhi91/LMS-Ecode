import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Fixed/Navbar'
import Footer from '../Fixed/Footer'

const Register = () => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setConfPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function signUp() {
        let item = { first_name, last_name, email, password, password_confirmation }
        let response = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        response = await response.json();
        console.warn("response", response)
        localStorage.setItem('user-Info',JSON.stringify(response));
        
        if(response.status==="success"){
            navigate('/');
        }else{
            setError(response.message)
        }
        

    }

    return (
        <>
            <Navbar />
            {/* content start */}
            <div className="container-fluid p-0 home-content container-top-border">
                {/* account block start */}
                <div className="container">
                    <nav className="navbar clearfix secondary-nav pt-0 pb-0 login-page-seperator">
                        <ul className="list mt-0">
                            <li><a href="/login" >Login</a></li>
                            <li><a href="/register" className="active">Register</a></li>
                        </ul>
                    </nav>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 vertical-align d-none d-lg-block">
                            <img className="img-fluid" src="frontend/img/register.png" width="450px" height="450px" />
                        </div>
                        <div className="col-xl-6 offset-xl-0 col-lg-6 offset-lg-0 col-md-8 offset-md-2">
                            <div className="rightRegisterForm">
                                {/* {{ csrf_field() }} */}
                                <div className="p-4">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-6">
                                                <label>First Name</label>
                                                <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="form-control form-control-sm" />
                                            </div>
                                            <div className="col-6">
                                                <label>Last Name</label>
                                                <input type="text" value={last_name} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="form-control form-control-sm" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email ID</label>
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" className="form-control form-control-sm" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="password" className="form-control form-control-sm" />
                                    </div>

                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input type="password" value={password_confirmation} onChange={(e) => setConfPassword(e.target.value)} className="form-control form-control-sm" placeholder="Confirm Password" />
                                        {/* @if ($errors->has('password_confirmation')) */}
                                        {/* @endif */}
                                    </div>

                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="offer" name="offer" /> {/* {{ old('offer') ? 'checked' : ''}} */}
                                            <label className="custom-control-label" htmlFor="offer">Receive relevant offers & communications</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="error" >{error}</label>
                                    </div>

                                    <div className="form-group mt-4">
                                        <button  onClick={signUp} className="btn btn-lg btn-block login-page-button">Register</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* account block end */}
            </div>
            {/* content end */}

            <Footer />
        </>

    )
}

export default Register