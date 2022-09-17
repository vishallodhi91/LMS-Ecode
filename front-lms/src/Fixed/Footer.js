import React from 'react'

const Footer = () => {
  return (
    <>
      <footer id="main-footer">
        <div className="row m-0">
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-3">
                <ul>
                    <li className="mb-1"><b>Quick Links</b></li>
                    <li><a href="/">Home Page</a></li>
                    <li><a href="/courseList">Courses List</a></li>
                    <li><a href="{{ route('instructor.list') }}">Instructors List</a></li>
                    <li><a href="{{ route('blogs') }}">Blogs List</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-6 mt-3">
                <ul>
                    <li className="mb-1"><b>Resources</b></li>
                    <li><a href="{{ route('page.about') }}">About Us</a></li>
                    <li><a href="{{ route('page.contact') }}">Contact Us</a></li>
                    <li><a href="{{ route('register') }}">Register Page</a></li>
                    <li><a href="/login">Login Page</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 mt-3 d-none d-sm-block">
                <ul>
                    <li className="mb-1"><b>Top Categories</b></li>
                    {/* @foreach ($categories as $category) */}
                        {/* @if($loop->iteration <= 4) */}
                            <li><a href="{{ route('course.list','category_id[]='.$category->id) }}">Development</a></li>
                        {/* @endif */}
                    {/* @endforeach */}
                    
                </ul>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-4">
                <img src="/frontend/img/learning.png" className="img-fluid" width="210" height="48"/>
                <br/>
                <span id="c-copyright">
                    Copyright © 2022, Ecode.edu . All rights reserved.
                </span>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer