import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SideItem = ({lecture,key,course_slug}) => {
    const is_section = lecture?.is_section;
    console.log(is_section)
    return (
        <>
            {is_section?
                <li className="site-menu-category">Section {lecture?.number} - {lecture?.s_title}</li>
                :
                <li className="site-menu-item">
                    <a href={"/master" + "/" + course_slug +  "/" + lecture?.lecture_quiz_id} activeClassName="active">
                        <article>
                            <FontAwesomeIcon icon="angle-double-right" />&nbsp;
                            <span>Lecture {lecture?.number}: {lecture?.l_title}</span>
                        </article>
                    </a>
                </li>
            }
        </>
    )
}

export default SideItem

