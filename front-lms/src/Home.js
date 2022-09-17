import React, { useState, useEffect } from "react";
import Footer from './Fixed/Footer';
import Navbar from './Fixed/Navbar';
import CourseCard from './Extend/CourseCard';
import InstructorCard from './Extend/InstructorCard';

const Home = () => {
  const [courseList, setCourseList] = useState();
  const [instructorList, setInstructorList] = useState();


  async function getCourseList(tabCourses) {

    let response = await fetch('http://127.0.0.1:8000/api/home/' + tabCourses);
    response = await response.json();
    setCourseList(response[0])
    setInstructorList(response[1])
    // const { course_title } = courseList;
    console.warn("courseList", courseList);
    console.warn("instructorList", instructorList);
  }
  useEffect(() => {
    getCourseList("latest_courses");
  }, []);
  


return (
  <>
    <Navbar />

    {/* Home Content Start */}
    <div className="container-fluid p-0 home-content">

      {/* banner start */}
      <div className="homepage-slide-blue">
        <h1>Learn Free courses online</h1>
        <span className="title-sub-header">Learn today’s most in-demand
          skills with our free online
          courses</span>
        {/* <form method="GET" action="{{ route('course.list') }}"> */}
        <div className="searchbox-contrainer col-md-6 mx-auto">
          <input name="keyword" type="text" className="searchbox d-none d-sm-inline-block" placeholder="Search for courses by course titles" /><input name="keyword" type="text" className="searchbox d-inline-block d-sm-none" placeholder="Search for courses" /><a href="/courseList"><button className="searchbox-submit"><i className="fa fa-search"></i></button></a>
        </div>
        {/* </form> */}
      </div>
      {/* banner end */}

      {/* <?php 
            $tabs = array('latestTab' => 'Latest Courses',
                          'freeTab' => 'Free Courses',
                          'discountTab' => 'Discount Courses',
                        );
        ?> */}
      <nav className="clearfix secondary-nav seperator-head">
        <ul className="secondary-nav-ul list mx-auto nav">
          {/* <?php foreach ($tabs as $tab_key => $tab_value) { ?> */}
          <li className="nav-item">
            <a data-toggle="tab" role="tab" href="#" onClick={() => getCourseList("latest_courses")} className="nav-link ">Latest Courses</a>
          </li>
          <li className="nav-item">
            <a data-toggle="tab" role="tab" href="#" onClick={() => getCourseList("freeTab_courses")} className="nav-link ">Free Courses</a>
          </li>
          <li className="nav-item">
            <a data-toggle="tab" role="tab" href="#" onClick={() => getCourseList("discountTab_courses")} className="nav-link ">Discount Courses</a>
          </li>
          {/*  <?php }?> */}
        </ul>
      </nav>

      {/* course list start */}
      <div className="container tab-content">
        {/* <?php foreach ($tabs as $tab_key => $tab_value) { ?> */}
        <div className="<?php echo $tab_key == 'latestTab' ? 'tab-pane fade show active' : 'tab-pane fade';?>" id="<?php echo $tab_key;?>" role="tabpanel">

          <div className="row">
            <CourseCard courseList={courseList} />
          </div>

        </div>
        {/* <?php }?> */}

      </div>
      {/* course list end */}

      {/* dummy block start */}
      <article className="learn-block">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h3 className="dblock-heading">Learn every topic, everytime.</h3>
              <p className="dblock-text">Online Coding Courses are the training programs that enables you to learn the necessary programming skills that employers are searching for. It helps you to focus on important aspects of programming and allows you to solve real-life problems for computer programming. These Online coding certification courses are cheaper and faster to learn than college degree courses. These online programming courses will help you to enhance your logical thinking and problem-solving skills.</p>
              <a href="/courseList" className="btn btn-ulearn">Explore Courses</a>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 vertical-align">
              <img className="img-fluid mt-5 mx-auto" src="/frontend/img/logo.png" />
            </div>
          </div>
        </div>
      </article>
      {/* dummy block end */}

      {/* instructor block start */}
      <article className="instructor-block">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center seperator-head mt-3">
              <h3 style= {{fontFamily: "Times New Roman,Times, serif",fontWeight: "900",fontSize: "2.5rem"}} >Our Instructors</h3>
            <h5 className="mt-3">We have more than 3,250 skilled & professional Instructors</h5>
          </div>
        </div>

        <div className="row mt-4 mb-5">
          <InstructorCard instructorList={instructorList} />
        </div>
    </div>
  </article>
        {/* instructor block end */ }


      </div >
  {/* Home Content End */ }
  < Footer />
    </>
  )
}

export default Home