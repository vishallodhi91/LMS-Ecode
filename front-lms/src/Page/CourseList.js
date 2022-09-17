import React, { useState, useEffect } from "react";
import Footer from '../Fixed/Footer'
import Navbar from '../Fixed/Navbar'
import CourseCard from '../Extend/CourseCard';


const CourseList = () => {
    const [courseList, setCourseList] = useState();
    const [categories, setCategories] = useState();
    const [level, setLevel] = useState();



    async function getCourseList() {

        let response = await fetch('http://127.0.0.1:8000/api/courseList');
        response = await response.json();
        setCourseList(response.courses.data)
        setCategories(response.categories)
        setLevel(response.instruction_levels)
        // const { course_title } = courseList;
    }
    useEffect(() => {
        getCourseList();
    }, []);
    console.warn("level", level);
    return (
        <>
            <Navbar />
            {/* content start */}
            <div className="container-fluid p-0 home-content">
                {/* banner start */}
                <div className="subpage-slide-blue">
                    <div className="container">
                        <h1>Course List</h1>
                    </div>
                </div>
                {/* banner end */}

                {/* breadcrumb start */}
                <div className="breadcrumb-container">
                    <div className="container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.php">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Course List</li>
                        </ol>
                    </div>
                </div>

                {/* breadcrumb end */}
                <div className="container mt-5">
                    <div className="row">
                        {/* filter start */}
                        <div className="col-xl-2 col-lg-2 col-md-3 d-none d-md-block">
                            <form method="GET" action="{{ route('course.list') }}" id="courseList">
                                <span className="blue-title">Filter Results</span>
                                {/* @if($_GET) */}
                                <a href="/courseList" className="clear-filters"><i className="fa fa-sync"></i>&nbsp;Clear filters</a>
                                {/* @endif */}
                                <h6 className="mt-2 underline-heading">Categories</h6>
                                <ul className="ul-no-padding">
                                    {/* @foreach ($categories as $category) */}
                                    {categories?.map((category) => {
                                        return (
                                            <>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input filter-results" id="{{ 'cat-'.$category->id }}" name="category_id[]" value="{{ $category->id }}"></input>
                                                            <label className="custom-control-label" for="{{ 'cat-'.$category->id }}">{category?.name} </label>
                                                    </div>
                                                </li>
                                            </>
                                        )

                                    })}
                                    {/* @endforeach */}
                                </ul>

                                <h6 className="mt-3 underline-heading">Level</h6>

                                <ul className="ul-no-padding">
                                    {/* @foreach ($instruction_levels as $instruction_level) */}
                                    {level?.map((level) => {
                                        return (
                                            <>
                                                <li>
                                                    <div className="custom-control custom-checkbox">
                                                        {/* <input type="checkbox" className="custom-control-input filter-results" id="{{ 'ins-level-'.$instruction_level->id }}" name="instruction_level_id[]" value="{{ $instruction_level->id }}"
                                @if(isset($_GET['instruction_level_id']))
                                    {{ in_array($instruction_level->id, $_GET['instruction_level_id']) ? 'checked' : '' }}
                                @endif
                                > */}
                                                        <label className="custom-control-label" for="{{ 'ins-level-'.$instruction_level->id }}">{level?.level}</label>
                                                    </div>
                                                </li>
                                            </>
                                        )

                                    })}
                                    {/* @endforeach */}
                                </ul>

                                <h6 className="mt-3 underline-heading">Price</h6>
                                {/* <?php $levels = array(
                                            '0-0' => 'Free',
                                            '1-50' => 'Less than USD 50',
                                            '50-99' => 'USD 50 - USD 99',
                                            '100-199' => 'USD 100 - USD 199',
                                            '200-299' => 'USD 200 - USD 299',
                                            '300-399' => 'USD 300 - USD 399',
                                            '400-499' => 'USD 400 - USD 499',
                                            '500' => 'More than USD 500',
                                            );
                    ?> */}
                                <ul className="ul-no-padding">
                                    {/* <?php foreach ($levels as $l_key => $l_value) { ?> */}
                                    <li>
                                        <div className="custom-control custom-checkbox">
                                            {/* <input type="checkbox" className="custom-control-input filter-results" id="{{ $l_key }}" name="price_id[]" value="{{ $l_key }}"
                                @if(isset($_GET['price_id']))
                                    {{ in_array($l_key, $_GET['price_id']) ? 'checked' : '' }}
                                @endif
                                > */}
                                            <label className="custom-control-label" for="{{ $l_key }}">l_value</label>
                                        </div>
                                    </li>
                                    {/* <?php }?> */}
                                </ul>
                            </form>
                        </div>
                        {/* filter end */}
                        {/* course block start */}
                        <div className="col-xl-10 col-lg-10 col-md-9">
                            <div className="row px-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-8">
                                    <span >Showing currentPage of lastPage page(s)</span>
                                </div>
                                <div className="col-xl-2 offset-xl-4 col-lg-2 offset-lg-4 col-md-3 offset-md-3 col-sm-3 offset-sm-3 col-4">
                                    {/* <select className="form-control form-control-sm sort-by">
                                <option value="">Sort By</option>
                                <option<?php echo(!empty($_GET['sort_price']) && $_GET['sort_price']=='asc')?' selected="selected"':'';?> value="sort_price=asc">Price (Low to High)</option>
                                <option<?php echo(!empty($_GET['sort_price']) && $_GET['sort_price']=='desc')?' selected="selected"':'';?>  value="sort_price=desc">Price (High to Low)</option>
                            </select> */}
                                </div>
                            </div>

                            {/* course start */}
                            <div className="row">
                                <CourseCard courseList={courseList} />
                            </div>
                            {/* course end */}
                            {/* pagination start */}
                            <div className="row float-right mt-5">
                                {/* {{ $courses->appends($_GET)->links() }} */}
                            </div>
                            {/* pagination end */}
                        </div>
                        {/* course block end */}
                    </div>
                </div>
            </div>

            {/* content end */}
            <Footer />
        </>
    )
}

export default CourseList