import React, { useState, useEffect } from "react";
import Footer from '../../Fixed/Footer'
import Navbar from '../../Fixed/Navbar'
import { useParams } from 'react-router-dom'

const Checkout = () => {
    const params = useParams();
    const { course_slug } = params;

    const [courseInfo, setCourseInfo] = useState();
    async function getCourseInfo(course_slug) {

        let response = await fetch('http://127.0.0.1:8000/api/checkout/' + course_slug);
        response = await response.json();
        // const { course_title } = courseList;
        const { course_title, price, strike_out_price, course_image } = response.course;
        const mycourseInfo = {
            course_title,
            price,
            strike_out_price,
            course_image
        };
        setCourseInfo(mycourseInfo)
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
                        <h1>Checkout</h1>
                    </div>
                </div>
                {/* banner end */}

                {/* breadcrumb start */}
                <div className="breadcrumb-container">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li className="breadcrumb-item"><a href="@if($course_breadcrumb) {{ $course_breadcrumb }} @else {{ route('course.list') }} @endif">Course List</a></li>
                            <li className="breadcrumb-item"><a href="{{ route('course.view', $course->course_slug) }}">Course</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </div>
                </div>

                {/* breadcrumb end */}


                <article className="container mt-4">
                    <div className="row">
                        <div className="col-xl-7 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <h6 className="underline-heading mb-4">Confirm Purchase</h6>


                            <div className="row mb-1">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-4">
                                    <img style={{width:"150px"}} src={'http://127.0.0.1:8000/' + courseInfo?.course_image} />
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-8">
                                    <h6 className="mb-xl-0">
                                        {courseInfo?.course_title}</h6>
                                    <div className="instructor-clist mb-0 mt-1 d-sm-block d-none">
                                        <div className="ml-1">
                                            <i className="far fa-bookmark"></i>&nbsp;&nbsp;
                                            <span>Category <b>IT & Software</b></span>
                                        </div>
                                    </div>
                                    <div className="instructor-clist mb-0 mt-1">
                                        <div>
                                            <i className="fa fa-chalkboard-teacher"></i>&nbsp;
                                            <span>Created by <b>Vishal Lodhi</b></span>
                                        </div>
                                    </div>
                                    {/* @php $course_price = $course->price == 0.00 ? 'Free' : config('config.default_currency').$course->price; @endphp */}
                                    <h6 className="c-price-checkout">0.00&nbsp;<s>{courseInfo?.strike_out_price}</s></h6>
                                </div>

                            </div>

                            <div className="col-xl-7 offset-xl-2 col-lg-8 offset-lg-2 col-md-9 offset-md-2 col-sm-9 offset-sm-2 col-11 offset-1">
                                    {/* {{ csrf_field() }} */}

                                    <input type="hidden" name="course_id" value="{{ $course->id }}" />
                                    <input type="hidden" name="payment_method" value="paypal_express_checkout" />
                                    <input type="hidden" name="course_title" value="{{ $course->course_title }}" />

                                    <div className="form-group mt-4">
                                                    {/* <span>
                                                        @if($course->price == 0.00)
                                    Subscribe to the course
                                    @else
                                    Pay with Paypal Account
                                    @endif
                                                        Subscribe to the course
                                                    </span> */}
                                                      
                                                      <div className="btn btn-lg btn-block cv-enroll float-lg-right float-md-right float-sm-right">
                                            <a href={'/subscription-status/' + course_slug}  className="btn btn-learna"><i className="fas fa-cart-arrow-down"></i>   Subscribe to the course</a>
                                        </div>

                                    </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-6 col-lg-6 col-md-12">
                   <h4 className="c-price-total ml-4">$1280&nbsp;<span><s>$43,200</s>&nbsp;94% off</span></h4>
                   <div className="rightRegisterForm mt-3">
                        <div className="box-header">
                            Make Payment
                        </div>
                        <div className="px-4 py-2">
                            <div className="form-group">
                                <div className="form-group">
                                    <label>Card Number</label>
                                    <input type="text" className="form-control form-control-sm" placeholder="Card Number">
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-4">
                                        <label>MM</label>
                                        <select className="form-control form-control-sm">
                                            <option>MM</option>
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <label>YYYY</label>
                                        <select className="form-control form-control-sm">
                                            <option>YYYY</option>
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <label>CVV</label>
                                        <input type="text" className="form-control form-control-sm" placeholder="CVV">
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-group">
                                    <label>Name on Card</label>
                                    <input type="text" className="form-control form-control-sm" placeholder="Name on Card">
                                </div>
                            </div>

                            <div className="form-group mt-4">
                                <button type="button" className="btn btn-lg btn-block login-page-button">Complete Payment</button>
                            </div>

                            <div className="hr-container">
                               <hr className="hr-inline" align="left">
                               <span className="hr-text"> or </span>
                               <hr className="hr-inline" align="right">
                            </div>

                            <div className="form-group">
                                <button type="button" className="btn btn-lg btn-block social-btn facebook-btn">
                                    <div className="row">
                                        <div className="col-3">
                                            <i className="fab fa-paypal float-right"></i>
                                        </div>
                                        <div className="col-9">
                                            <span>
                                            Pay with Paypal Account
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>
               </div> */}
                    </div>



                </article>
            </div>


            {/* content end */}

            <Footer />
        </>

    )
}

export default Checkout