import React, { useState, useEffect } from "react";
import Footer from '../../Fixed/Footer'
import Navbar from '../../Fixed/Navbar'
import { useParams } from 'react-router-dom'

const Learn = () => {
    const params = useParams();
    const { course_slug } = params;

    const [courseInfo, setCourseInfo] = useState();
    const [curriculumInfo, setCurriculumInfo] = useState();

    async function getCourseInfo(course_slug) {

        let response = await fetch('http://127.0.0.1:8000/api/learn/' + course_slug);
        response = await response.json();
        // const { course_title } = courseList;
        const { course_title, keywords, overview } = response.course;
        const mycourseInfo = {
            course_title,
            keywords,
            overview
        };
        setCourseInfo(mycourseInfo)
        setCurriculumInfo(response.curriculum_sections)
    }
    useEffect(() => {
        getCourseInfo(course_slug)

    }, []);
    console.log(courseInfo);
    return (
        <>
            <Navbar />

            {/* content start */}
            <div className="container-fluid p-0 home-content">
                {/* banner start */}
                <div className="subpage-slide-blue">
                    <div className="container">
                        <h1>Dashboard</h1>
                    </div>
                </div>
                {/* banner end */}

                {/* breadcrumb start */}
                <div className="breadcrumb-container">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                            <li className="breadcrumb-item"><a href="{{ route('my.courses') }}">My Courses</a></li>
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
                                        <span>Created by <b>Vishal Lodhi</b></span>                        </div>
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
                                        <div className="cv-category-detail cv-enroll float-lg-right float-md-right float-sm-right">
                                            <a href="javascript::void(0);" className="btn btn-learna" data-toggle="modal" data-target="#rateModal">RATE COURSE</a>
                                        </div>
                                    </div>
                                </div>


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

                                                    {/* @foreach($curriculum_sections as $curriculum_section => $curriculum_lectures)
                                    <?php
                                    $section_split = explode('{# -#}', $curriculum_section);
                                    $section_id = $section_split[0];
                                    $section_name = $section_split[1];
                      ?> */}
                                                    <div className="card mb-2">
                                                        <div className="card-header" id="headingOne-{{ $section_id }}">
                                                            <h5 className="mb-0">
                                                                <button className="btn btn-acc-head" type="button" data-toggle="collapse" data-target="#collapseOne-{{ $section_id }}" aria-expanded="true" aria-controls="collapseOne-{{ $section_id }}">
                                                                    <i className="fas @if($loop->first) fa-minus @else fa-plus @endif accordian-icon mr-2" ></i><span>Start here</span>
                                                                </button>
                                                            </h5>
                                                        </div>

                                                        <div id="collapseOne-{{ $section_id }}" className="collapse @if($loop->first) show @endif" aria-labelledby="headingOne-{{ $section_id }}" data-parent="#accordionExample">
                                                            <div className="container">

                                                                {/* @foreach($curriculum_lectures as $curriculum_lecture)
                                                @php
                          		switch ($curriculum_lecture->media_type) {
								    case 0:
                                                $icon_class = 'fas fa-video';
                                                break;
                                                case 1:
                                                $icon_class = 'fas fa-headphones';
                                                break;
                                                case 2:
                                                $icon_class = 'far fa-file-pdf';
                                                break;
                                                case 3:
                                                $icon_class = 'far fa-file-alt';
                                                break;
                                                default:
                                                $icon_class = 'fas fa-video';
								}
                                                @endphp */}
                                                                {
                                                                    curriculumInfo[item].map((key) => {
                                                                        return (
                                                                            <>
                                                                                <div className="row lecture-container">
                                                                                    <div className="col-7 my-auto ml-4">
                                                                                        <i className="{{ $icon_class }} mr-2"></i>
                                                                                        <span>{key?.l_title}</span>
                                                                                    </div>
                                                                                    {/* @php
                                    $is_completed = SiteHelpers::getCoursecompletedStatus($curriculum_lecture->lecture_quiz_id);
                                                    @endphp */}
                                                                                    <div className="col-3 my-auto">
                                                                                        <article className="preview-time">
                                                                                            <span className="mr-3">
                                                                                                {/* @if($curriculum_lecture->media_type == 2)
                                                                {{ $curriculum_lecture-> f_duration.' Page(s)' }}
                                        	@elseif($curriculum_lecture->media_type == 0 || $curriculum_lecture->media_type == 1)
                                        		@if($curriculum_lecture->media_type == 0)
                                                                {{ $curriculum_lecture-> v_duration}}
                                                                @else
                                                                {{ $curriculum_lecture-> f_duration}}
                                                                @endif

                                                                @endif */}
                                                                                            </span>
                                                                                            <a href={'/master/' + course_slug + '/'+ key?.lecture_quiz_id } className="btn btn-ulearn-preview">
                                                                                                {/* @if($is_completed)
                                                                RESTART
                                                                @else
                                                                START
                                                                @endif */}
                                                                                                START
                                                                                            </a>
                                                                                        </article>
                                                                                    </div>
                                                                                    {/* <div className="col-1 my-auto">
                                                                                         @if($is_completed)
                                                                                        <i className="fas fa-check-circle" style={{ styleColor: "green" }} ></i>
                                                                                         @endif
                                                                                    </div> */}
                                                                                </div>
                                                                                {/* @endforeach */}
                                                                            </>
                                                                        )
                                                                    })

                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*  @endforeach */}
                                                </>
                                            )
                                        })
                                    }


                                </div>
                                {/* curriculum block end */}
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
                        </div>
                        {/* course sidebar end */}
                    </div>
                </div>

                {/* content end */}

                {/* The Modal start */}
                <div className="modal" id="rateModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bi-header ">
                                <h5 className="col-12 modal-title text-center bi-header-seperator-head">Rate the Course</h5>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="becomeInstructorForm">
                                <form id="rateCourseForm" className="form-horizontal" method="POST" action="{{ route('course.rate') }}">
                                    {/* {{ csrf_field() }} */}
                                    <input type="hidden" name="course_id" value="{{ $course->id }}" />
                                    <input type="hidden" name="rating" id="rating" value="{{ $course_rating->rating }}" />
                                    <input type="hidden" name="rating_id" value="{{ $course_rating->id }}" />
                                    <div className="px-4 py-2">
                                        <div className="form-group">
                                            <label>Your Rating</label>
                                            <div className="row">
                                                <div className="col-7 pl-2">
                                                    <div id="rateYo"></div>
                                                </div>
                                                <div className="col-5">
                                                    {/* @if($course_rating->id) */}
                                                    <a className="btn btn-sm btn-block delete-review delete-record" href="{{ route('delete.rating', $course_rating->id) }}">Delete Review</a>
                                                    {/* @endif */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Your Review</label>
                                            <textarea className="form-control form-control" placeholder="Comments" name="comments">Comment</textarea>
                                        </div>

                                        <div className="form-group mt-4">
                                            <button type="submit" className="btn btn-lg btn-block login-page-button">Add Review</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The Modal end */}
            </div>
            <Footer />
        </>

    )
}

export default Learn