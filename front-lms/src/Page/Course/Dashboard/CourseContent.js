import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";


const CourseContent = ({ lecture_detail }) => {


  function lectureFile() {
    if (lecture_detail?.media_type == 0) {
      return (
        <div className="col d-flex align-items-center justify-content-center frame" >
          <video controls >
            <source src={'http://127.0.0.1:8000/course/'+ lecture_detail?.course_id + "/" + lecture_detail?.video_name + "." + lecture_detail?.video_type} type="video/mp4" />
          </video>
        </div>
      );
    } else if (lecture_detail?.media_type == 1) {
      return (
        <div className="col d-flex align-items-center justify-content-center">
          {/* <audio controls>
            <source src={storage_url + "/" + lecture_detail?.course_id + "/" + lecture_detail?.file_name + "." + lecture_detail?.file_extension} type="audio/mpeg" />
          </audio> */}
        </div>
      );
    } else if (lecture_detail?.media_type == 2) {
      return (
        <div className="col mt-4">
          {/* <iframe src={site_url + "/readPDF/" + lecture_detail?.media} width="100%" height="450px"></iframe> */}
        </div>
      );
    } else if (lecture_detail?.media_type == 3) {
      return (
        <div className="col mt-4">
          <div dangerouslySetInnerHTML={{ __html: lecture_detail?.contenttext }} />
        </div>
      );
    }
  }


  function next() {
    if (lecture_detail?.next) {
      return (
        <li className="page-item">
          <a className="page-link" href={"/master" + "/" + lecture_detail?.course_id +  "/" + lecture_detail?.next}   >Next <span aria-hidden="true">→</span></a>
        </li>
      );
    }
    else {
      return (
        <li className="page-item disabled">
          <a className="page-link" href="javascript:void(0)" >Next <span aria-hidden="true">→</span></a>
        </li>
      );
    }
  }
  function prev() {
    if (lecture_detail?.prev) {
      return (
        <li className="page-item">
          <a className="page-link" href={"/master" + "/" + lecture_detail?.course_id +  "/" + lecture_detail?.prev}  ><span aria-hidden="true">←</span> Previous</a>
        </li>

      );
    }
    else {
      return (
        <li className="page-item disabled">
          <a className="page-link" href="javascript:void(0)">
            <span aria-hidden="true">←</span> Previous</a>
        </li>
      );
    }
  }
  return (
    <div className="page-content container-fluid">

      <div className="row">
        <div className="col-xl-6 c-col-md-12 col-sm-12 col-12">
          <h1 className="page-title">{lecture_detail?.section_title}</h1>
          <h4 className="lecture_detail-title">{lecture_detail?.title}</h4>
        </div>
        <div className="col-xl-3 c-col-md-6 col-sm-6 col-6">
          <ul className="pagination">
            {prev()}
            {next()}
          </ul>
        </div>
        <div className="col-xl-3 c-col-md-6 col-sm-6 col-6">
          <button className="btn btn-success" >
            Mark as completed
          </button>
        </div>
      </div>

      <div className="row media-container">
        <div className="col mt-4">
          {lectureFile()}
        </div>
      </div>

    </div>
  )
}

export default CourseContent