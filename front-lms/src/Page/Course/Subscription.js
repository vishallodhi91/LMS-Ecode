import React from 'react'
import Footer from '../../Fixed/Footer'
import Navbar from '../../Fixed/Navbar'
import {useParams} from 'react-router-dom'

const Subscription = () => {
  const params = useParams();
  const {course_slug} = params;
  return (
    <>
      <Navbar />

      {/* content start */}
      <div className="container-fluid p-0 home-content">
        {/* banner start */}
        <div className="subpage-slide-blue">
          <div className="container">
            <h1>Subscription Status</h1>
          </div>
        </div>
        {/* banner end */}

        {/* breadcrumb start */}
        <div className="breadcrumb-container">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.php">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Subscription Status</li>
            </ol>
          </div>
        </div>

        {/* breadcrumb end */}


        <article className="container not-found-block">
          <div className="row">
            <div className="col-12 not-found-col">
              {/* @if($status == "success") */}
              <span><i className="fas fa-thumbs-up"></i></span>
              <h6 className="my-3">Your transaction is successfull and your transaction id is 1</h6>
              <a href={'/learn/' + course_slug} className="btn btn-learna">Go to course learn page</a>
              {/* @else 
              <span><i className="fas fa-thumbs-down"></i></span>
              <h6 className="my-3">Sorry! Your transaction was failed...</h6>
              <a href={'/course/' + course_slug} className="btn btn-ulearn-cview mt-3">Return to course</a>
               @endif */}
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}

export default Subscription;