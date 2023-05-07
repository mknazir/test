import React from 'react'
import Navbar from './Navbar'
import Crousel from './Crousel'
import Cards from './Cards'
import Categories from "./Categories"
import Footer from './Footer'
import CookieConsent from "react-cookie-consent";
import coursesdata from './data'
import { Helmet } from 'react-helmet';


export default function Home() {
  const siteTitle = 'EdTech Home Page';
  const siteDescription = 'We provide a variety of courses and categories to help you learn new skills.';
  const siteKeywords = 'education, courses, categories, learning, skills, react, js';
  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
      </Helmet>
      <CookieConsent buttonText="Accept Cookies">This website uses cookies to enhance the user experience.</CookieConsent>
      <Navbar />
      <Crousel />
      <h1 style={{ marginTop: "3rem", textAlign: "center" }}>Courses</h1>
      <Cards coursesdata={coursesdata} temp={0} />
      <h1 style={{ marginTop: "3rem", textAlign: "center" }}>Categories</h1>
      <Categories />
      <Footer />
    </div>
  )
}
