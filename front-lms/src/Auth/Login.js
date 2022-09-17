import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Fixed/Navbar'
import Footer from '../Fixed/Footer'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function signIn() {
        let item = { email, password }
        let response = await fetch("http://127.0.0.1:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        response = await response.json();
        localStorage.setItem('user-info', JSON.stringify(response));

        if (response.status === "success") {
            localStorage.setItem('user-info', JSON.stringify(response));
            navigate('/');
        } else {
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
                            <li><a href="/login" className="active">Login</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul>
                    </nav>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 vertical-align d-none d-lg-block">
                            <img className="img-fluid" src="frontend/img/login.png" width="500px" height="500px" />
                        </div>
                        <div className="col-xl-6 offset-xl-0 col-lg-6 offset-lg-0 col-md-8 offset-md-2">
                            <div className="rightRegisterForm">
                                {/* {{ csrf_field() }} */}
                                <div className="p-4">
                                    <div className="form-group">
                                        <label>Email ID</label>
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" className="form-control form-control-sm" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="password" className="form-control form-control-sm" />
                                        {/* @if ($errors->has('password')) @endif */}


                                    </div>
                                    <div className="form-group">
                                        <div className="row m-0">
                                            <div className="custom-control custom-checkbox col-6">
                                                <input type="checkbox" className="custom-control-input" name="remember" id="remember" />  {/* {{ old('remember') ? 'checked' : '' }} */}
                                                <label className="custom-control-label" for="remember">Remember me</label>
                                            </div>
                                            <div className="col-6">
                                                <a href="#" className="float-right forgot-text">Forgot password?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="error" >{error}</label>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={signIn} className="btn btn-lg btn-block login-page-button">Login</button>
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

export default Login