import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cards from './Cards'
import coursesdata from './data'
import { Helmet } from 'react-helmet';

function Courses() {
  const siteTitle = 'Courses - EdTech';
  const siteDescription = 'Explore our range of courses covering ReactJS, JavaScript, Blockchain, Python, SQL, Django, OOPs, C/C++ and more. Our courses are designed to help you build the skills you need to succeed in the world of software development.';
  const siteKeywords = 'ReactJS, JavaScript, Blockchain, Python, SQL,VueJS, Django, OOPs, C/C++, courses, software development, web development, mobile development, front-end development, back-end development, coding, programming, skills, education, online courses';
  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>
      <Navbar />
      <h1 style={{ marginTop: "4rem", textAlign: "center" }}>Courses</h1>
      <Cards coursesdata={coursesdata} temp={0} />
      <Cards coursesdata={coursesdata} temp={4} />
      <Footer />
    </div>
  )
}

export default Courses
