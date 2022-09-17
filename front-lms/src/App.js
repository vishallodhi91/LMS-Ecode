import React from 'react';
import logo from './logo.svg';
import Home from './Home';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Register from './Auth/Register';
import Course from './Page/Course/Course';
import Checkout from './Page/Course/Checkout';
import Subscription from './Page/Course/Subscription';
import Learn from './Page/Course/Learn';
import Master from './Page/Course/Dashboard/Master';
import Instructor from './Page/Instructor';
import CourseList from './Page/CourseList';


import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/logout" element={<Logout />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/courseList" element={<CourseList />}/>
    <Route path="/course/:course_slug" element={<Course />}/>
    <Route path="/checkout/:course_slug" element={<Checkout />}/>
    <Route path="/subscription-status/:course_slug" element={<Subscription />}/>
    <Route path="/learn/:course_slug" element={<Learn />}/>
    <Route path="/master/:course_slug/:lecture_quiz_id" element={<Master />}/>

    <Route path="/instructor" element={<Instructor />}/>

    </Routes>
    </BrowserRouter>


  );
}

export default App;
