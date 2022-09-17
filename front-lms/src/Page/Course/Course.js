import React, { useState, useEffect } from "react";
import Footer from '../../Fixed/Footer'
import Navbar from '../../Fixed/Navbar'
import { useParams, useNavigate } from 'react-router-dom'


const Course = () => {
    const params = useParams();
    const { course_slug } = params;

    const [courseInfo, setCourseInfo] = useState();
    const [curriculumInfo, setCurriculumInfo] = useState();
    const navigate = useNavigate();

    async function getCourseInfo(course_slug) {

        let response = await fetch('http://127.0.0.1:8000/api/course/' + course_slug);
        response = await response.json();
        // const { course_title } = courseList;
        const { course_title, keywords, overview, course_image } = response.course;
        const mycourseInfo = {
            course_title,
            keywords,
            overview,
            course_image
        };
        setCourseInfo(mycourseInfo)
        setCurriculumInfo(response.curriculum_sections)
    }
    useEffect(() => {
        if(!localStorage.getItem('user-info')){
            navigate('/login');
        }else{
            getCourseInfo(course_slug) 
        }
        

    }, []);
    console.log(curriculumInfo)

    return (
        <>
            <Navbar />
            {/* content start */}
            <div className="container-fluid p-0 home-content">
                {/* banner start */}
                <div className="subpage-slide-blue">
                    <div className="container">
                        <h1>Course</h1>
                    </div>
                </div>
                {/* banner end */}

                {/* breadcrumb start */}
                <div className="breadcrumb-container">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/home">Home</a></li>
                            <li className="breadcrumb-item"><a href="/course-list">Course List</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{courseInfo?.course_title}</li>
                        </ol>
                    </div>
                </div>

                {/* breadcrumb end */}

                <div className="container">
                    <div className="row mt-4">
                        {/* course block start */}
                        <div className="col-xl-9 col-lg-9 col-md-8">
                            <div className="cv-course-container">
                                <h3>{courseInfo?.course_title}</h3>
                                <div className="instructor-clist m-0">
                                    <div className="col-md-12 p-0 m-0">
                                        <i className="fa fa-chalkboard-teacher"></i>&nbsp;
                                        <span>Created by <b>Vishal Lodhi</b></span>
                                    </div>
                                </div>
                                <div className="row cv-header">

                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6  col-6">
                                        <div className="cv-category-icon">
                                            <i className="far fa-bookmark"></i>
                                        </div>
                                        <div className="cv-category-detail">
                                            <span>Category</span>
                                            <br />
                                            IT & Software
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6  col-6">
                                        <div className="cv-category-detail cv-rating float-lg-left float-md-right float-sm-right">
                                            <span> Reviews</span>
                                            <br />
                                            <star className="course-rating">
                                                {/* @for($r=1;$r<=5;$r++) */}
                                                <span className="fa fa-star {{ $r <= $course->ratings->avg('rating') ? 'checked-vpage' : ''}}"></span>
                                                {/* @endfor */}
                                            </star>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                        <div className="cv-category-detail cv-price">
                                            {/* @php $course_price = $course->price ? $course->price : '0.00'; @endphp */}
                                            <h4>Price ₹ 0.00</h4>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 float-md-right col-sm-6 float-sm-right col-6">
                                        <div className="cv-category-detail cv-enroll float-lg-right float-md-right float-sm-right ">
                                            <a href={'/checkout/' + course_slug} className="btn btn-learna">ENROLL COURSE</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-image mt-2">
                                    <img  src={'http://127.0.0.1:8000/' + courseInfo?.course_image} />
                                </div>

                                {/* @if($course->overview) */}
                                <h4 className="mt-4">Course Overview</h4>
                                {/* {courseInfo?.overview} */}
                                <div dangerouslySetInnerHTML={{ __html: courseInfo?.overview }} />
                                {/* @endif */}

                                {/* @if($is_curriculum) */}
                                {/* curriculum block start */}
                                <h4 className="mt-4">Curriculum</h4>

                                <div className="accordion mt-3" id="accordionExample">
                                    {
                                        curriculumInfo && Object.keys(curriculumInfo)?.map((item, i) => {
                                            const section_split = item.split("{#-#}");
                                            const section_id = section_split[0]
                                            const section_name = section_split[1]
                                            return (
                                                <>
                                                    <div className="card mb-2">
                                                        <div className="card-header" id={"headingOne-" + section_id}>
                                                            <h5 className="mb-0">
                                                                <button className="btn btn-acc-head" type="button" data-toggle="collapse" data-target={"#collapseOne-" + section_id} aria-expanded="true" aria-controls={"#collapseOne-" + section_id}>
                                                                    <i className="fas @if($loop->first) fa-minus @else fa-plus @endif accordian-icon mr-2" ></i><span>{section_name}</span>
                                                                </button>
                                                            </h5>
                                                        </div>

                                                        <div id={"#collapseOne-" + section_id} className="collapse @if($loop->first) show @endif" aria-labelledby={"headingOne-" + section_id} data-parent="#accordionExample">
                                                            <div className="container">

                                                                {/* @foreach($curriculum_lectures as $curriculum_lecture)
                          	@php
                          		switch ($curriculum_lecture->media_type) {
								    case 0:
								        $icon_className = 'fas fa-video';
								        break;
								    case 1:
								        $icon_className = 'fas fa-headphones';
								        break;
								    case 2:
								        $icon_className = 'far fa-file-pdf';
								        break;
								    case 3:
								        $icon_className = 'far fa-file-alt';
								        break;
								    default:
								        $icon_className = 'fas fa-video';
								}
                          	@endphp */}
                                                                {
                                                                    curriculumInfo[item].map((key) => {
                                                                        return (
                                                                            <>

                                                                                <div className="row lecture-container">
                                                                                    <div className="col-8 my-auto ml-4">
                                                                                        <i className="far fa-file-alt mr-2"></i>
                                                                                        <span> {key?.l_title}</span>
                                                                                    </div>
                                                                                    <div className="col-3 my-auto">
                                                                                        <article className="preview-time">
                                                                                            <span>
                                                                                                {/* @if($curriculum_lecture->media_type == 2)
                                        		{{ $curriculum_lecture->f_duration.' Pages' }}
                                        	@elseif($curriculum_lecture->media_type == 0 || $curriculum_lecture->media_type == 1)
                                        		@if($curriculum_lecture->media_type == 0)
                                        			{{ $curriculum_lecture->v_duration }}
                                        		@else
                                        			{{ $curriculum_lecture->f_duration }}
                                        		@endif
                                        	@endif */}
                                                                                            </span>
                                                                                        </article>
                                                                                    </div>
                                                                                </div>
                                                                                {/* @endforeach   */}
                                                                            </>
                                                                        )
                                                                    })

                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* @endforeach */}
                                                </>
                                            )
                                        })
                                    }

                                </div>
                                {/* curriculum block end */}
                                {/* @endif
                    @if(count($course->ratings)>0) */}
                                {/* reviews block start */}
                                <section className="mt-5">
                                    <h4 className="mb-3">Reviews</h4>

                                    <div className="reviews-container">
                                        {/* @foreach($course->ratings as $rating) */}
                                        <div className="review-row row mx-0">
                                            <div className="col-3">
                                                <div className="row">
                                                    <div className="review-avatar mr-2">
                                                        <div className="review-avatar-span">
                                                            P
                                                        </div>
                                                    </div>
                                                    <div className="review-time-block">
                                                        <div className="review-time">
                                                            8:00
                                                        </div>
                                                        <span>Peter Parker</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <star className="course-rating">
                                                    {/* @for($r=1;$r<=5;$r++) */}
                                                    <span className="fa fa-star checked"></span>
                                                    {/* @endfor */}

                                                </star>
                                                <p className="mt-1">I liked Course<br />This help me lot<br />Thank you</p>
                                            </div>
                                        </div>
                                        {/* @endforeach */}
                                    </div>
                                </section>
                                {/* reviews block end */}
                                {/* @endif */}
                            </div>
                        </div>
                        {/* course block end */}

                        {/* course sidebar start */}
                        <div className="col-xl-3 col-lg-3 col-md-4 d-none d-md-block">
                            <section className="course-feature">
                                <header>
                                    <h6>COURSE FEATURES</h6>
                                </header>

                                <div className="cf-pricing">
                                    <span>PRICING:</span>
                                    <button className="cf-pricing-btn btn">FREE</button>
                                </div>

                                <ul className="list-unstyled cf-pricing-li">
                                    <li><i className="far fa-user"></i>199 Students</li>
                                    <li><i className="far fa-clock"></i>Duration: 33h 14m</li>
                                    <li><i className="fas fa-bullhorn"></i>Lectures: 2</li>
                                    <li><i className="far fa-play-circle"></i>Videos: 0</li>
                                    <li><i className="far fa-address-card"></i>Certificate of Completion</li>
                                    <li><i className="fas fa-file-download"></i>Downloadable Resources</li>
                                </ul>
                            </section>


                            <h6 className="mt-4 underline-heading">COURSE CATEGORIES</h6>
                            <ul className="ul-no-padding">
                                {/* @php $categories = SiteHelpers::active_categories(); @endphp
                    @foreach ($categories as $category) */}
                                <li className="my-1">
                                    Development
                                </li>
                                <li className="my-1">
                                    Business
                                </li>
                                <li className="my-1">
                                    IT & Software
                                </li>
                                <li className="my-1">
                                    Marketing
                                </li>
                                <li className="my-1">
                                    Lifestyle
                                </li>
                                <li className="my-1">
                                    Photography
                                </li>
                                <li className="my-1">
                                    Health & Fitness
                                </li>
                                <li className="my-1">
                                    Teacher Training
                                </li>
                                <li className="my-1">
                                    Music
                                </li>
                                <li className="my-1">
                                    Academics
                                </li>
                                {/* @endforeach */}
                            </ul>

                            {/* @if($course->keywords) */}
                            <section className="tags-container mt-3">
                                <h6 className="underline-heading">TAGS</h6>
                                <ul className="list-unstyled tag-list mt-3">
                                    {/* @php
                    	$tags = explode(',', $course->keywords);
                                    @endphp
                                    @foreach($tags as $tag) */}
                                    <li><a href="javascript:void();">Laravel</a></li>
                                    <li><a href="javascript:void();">PHP</a></li>


                                    {/* @endforeach */}
                                </ul>
                            </section>
                            {/* @endif */}
                        </div>
                        {/* course sidebar end */}
                    </div>
                </div>
            </div>
            {/* content end */}
            <Footer />
        </>

    )
}
export default Course;