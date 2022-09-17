import React from 'react'

const InstructorCard = ({instructorList}) => {
    return (
        <>
            {
                instructorList?.map((instructor) => {
                    return (
                        <>
                            {/* @foreach ($instructors as $instructor)  */}
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="instructor-box mx-auto text-center">
                                    <a href={'/course/' + instructor?.instructor_slug}>
                                        <main>
                                        <img style={{width:"258px"}} src={'http://127.0.0.1:8000/' + instructor?.instructor_image} ></img>
                                            <div className="col-md-12">
                                                <h6 className="instructor-title">{instructor?.first_name} {instructor?.last_name}</h6>
                                                <p>{instructor?.biography}</p>
                                            </div>
                                        </main>
                                    </a>
                                </div>
                            </div>
                            {/* @endforeach */}
                        </>
                    )

                })}



        </>
    )
}

export default InstructorCard