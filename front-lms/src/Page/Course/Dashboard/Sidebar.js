import React, { useState, useEffect } from "react";
import SideItem from './SideItem';

const Sidebar = ({sections, course_slug }) => {
    function sideItem(){
        if(sections instanceof Array){
          return sections.map(function(lecture, i){
             return <SideItem lecture={lecture} key={i} course_slug = {course_slug}/>;
          })
        }
      }


    return (
        <div className="site-menubar-body">
            <ul className="site-menu">
            {sideItem()}
            </ul>
        </div>
    )
}

export default Sidebar