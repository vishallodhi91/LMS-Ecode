import React from 'react'


const CourseCard = ({ courseList }) => {
    
    return (
        <>
            {
                courseList?.map((course) => {
                    return (
                        <>
                            {/* @foreach(${$tab_key.'_courses'} as $course) */}
                            < div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" >
                                <div className="course-block mx-auto">
                                    <a href={'/course/' + course?.course_slug} >
                                        <main>
                                            <img style={{width:"258px"}} src={'http://127.0.0.1:8000/' + course?.course_image} />
                                            <div className="col-md-12"><h6 className="course-title">{course?.course_title}</h6></div>

                                            <div className="instructor-clist">
                                                <div className="col-md-12">
                                                    <i className="fa fa-chalkboard-teacher"></i>&nbsp;
                                                    <span>Created by <b>{course?.first_name} {course?.last_name}</b></span>
                                                </div>
                                            </div>
                                        </main>
                                        <footer>
                                            <div className="c-row">
                                                <div className="col-md-6 col-sm-6 col-6">
                                                    {/* @php $course_price = $course->price ? config('config.default_currency').$course->price : 'Free'; @endphp */}
                                                    <h5 className="course-price">Price ₹ {course?.price}&nbsp;<s>{course?.strike_out_price}</s></h5>
                                                </div>
                                                <div className="col-md-5 offset-md-1 col-sm-5 offset-sm-1 col-5 offset-1">
                                                    <star className="course-rating">
                                                        {/* @for ($r=1;$r<=5;$r++) */}
                                                        <span className="fa fa-star checked }}"></span>
                                                        {/* @endfor */}
                                                    </star>
                                                </div>
                                            </div>
                                        </footer>
                                    </a>
                                </div>

                            </div>
                        </>
                    )

            })}



        </>
    )
}

export default CourseCard