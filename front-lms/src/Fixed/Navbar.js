import React, { useState } from 'react'

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user-info')));

    function menu() {
        if (user?.status === "success") {
            return (
                <>
                    <div className="dropdown float-xl-left float-sm-right float-right">
                        <span id="dropdownMenuButtonRight" data-toggle="dropdown">{user?.name} &nbsp;<i className="fa fa-caret-down"></i>&nbsp;&nbsp;</span>

                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButtonRight">

                            {/* @if(Auth::user()->hasRole('instructor')) */}
                            {/* @endif */}

                            <a className="dropdown-item" href="{{ route('my.courses') }}" >
                               <i class="fa fa-th"></i> My Courses
                            </a>

                            <a className="dropdown-item" href="/logout" >
                                <i className="fa fa-power-off"></i> Logout
                            </a>

                        </div>
                    </div>
                </>)
        } else {
            return <a className="btn btn-learna" href="/login">Login / Sign Up</a>;
        }
    }
    return (
        <>
            <nav className="navbar navbar-default fixed-top">
                <div className="row" style={{ flexGrow: "1" }} >
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2" id="logo">
                        <i className="fa fa-bars d-inline-block d-md-none mobile-nav"></i>
                        <a href="/" className="float-xl-right"><img style={{ width: "120px", marginLeft: "15px" }} src="/frontend/img/learning.png" width="100" height="35" /></a>
                    </div>
                    <div className="col-md-3 col-lg-6 col-xl-6 d-none d-md-block">
                        <div className="dropdown float-left" >
                            <span id="dropdownMenuButton" data-toggle="dropdown">Categories &nbsp;<i className="fa fa-caret-down"></i></span>
                            {/* <?php 
                        $categories = SiteHelpers::active_categories();
                    ?> */}
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* @foreach ($categories as $category) */}
                                <a className="dropdown-item" href="/courseList">
                                    <i className="fa fa-code category-menu-icon"></i>
                                    Web Technology
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-cloud category-menu-icon"></i>
                                    Cloud Computing
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="fa fa-database category-menu-icon"></i>
                                    Database Tutorials
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i class="fa fa-chart-line category-menu-icon"></i>
                                    Data Science
                                </a>
                                {/* @endforeach */}
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-5 col-md-3 col-lg-2 col-xl-2 d-none d-sm-block">
                        {/* @if(Auth::check() && !Auth::user()->hasRole('instructor') && !Auth::user()->hasRole('admin')) */}
                        <a className="become-instructor" href="http://127.0.0.1:8000/" target="_blank" rel="noreferrer noopener">Become Instructor</a>
                        {/* @endif */}
                    </div>

                    <div className="col-6 col-sm-3 col-md-3 col-lg-2 col-xl-2">
                        {/* @guest */}
                        {menu()}

                        {/* @else */}

                        {/* @endguest */}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;