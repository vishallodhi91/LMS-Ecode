import React, { useState, useEffect } from "react";
import './site.css'
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import CourseContent from './CourseContent';
import Resource from './Resource';
import {useParams} from 'react-router-dom'


const Master = () => {
    const params = useParams();
    const {course_slug, lecture_quiz_id} = params;

    const [lectureInfo, setLectureInfo] = useState();
    


    async function getCourseInfo(course_slug, lecture_quiz_id, is_sidebar) {

        let response = await fetch('http://127.0.0.1:8000/api/course-enroll/' + course_slug + '/' + lecture_quiz_id + '/' + is_sidebar );
        response = await response.json();
        // const { course_title } = courseList;

        if(is_sidebar)
        {
            setLectureInfo({sections: [response.sections],lecture_detail: [response.lecture_details]});
        } else {
            setLectureInfo({ lecture_detail: response.lecture_details });
        }
    }
    useEffect(() => {
        getCourseInfo(course_slug, lecture_quiz_id, true)
    }, []);

    console.log(lectureInfo?.sections[0]);
    console.log(lectureInfo?.lecture_detail[0]);    
    return (
        <div>
            <div id="top-bar"><Topbar course_slug = {course_slug} /></div>       
            <div className="site-menubar" id="site-menubar"><Sidebar sections = {lectureInfo?.sections[0]} course_slug = {course_slug}/></div>
            <div className="page"><CourseContent lecture_detail = {lectureInfo?.lecture_detail[0]} /></div>
            <div className="site-action"><Resource lecture_detail =  {lectureInfo?.lecture_detail[0]} /></div>          
        </div>
    )
}

export default Master