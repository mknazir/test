import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation, useParams } from 'react-router-dom';
import coursesdata from './data'

function CourseVideo() {

  const id = useParams();

  return (
    <div> 
      <Navbar />
    <div style={{margin: "2rem auto", width: "70%", textAlign: "center"}}>
      <h1 style={{marginTop: "90px"}}>{coursesdata[id.courseId-1].title}</h1>
      <iframe width="700" height="400" src={coursesdata[id.courseId - 1].videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{margin: "2rem"}}></iframe>
      <p>{coursesdata[id.courseId-1].description}</p>
    </div>
    <Footer />
    </div>
  )
}

export default CourseVideo
