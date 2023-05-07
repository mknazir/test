import { BrowserRouter, Routes, Route} from 'react-router-dom';  
import './App.css';
import React, { useEffect } from "react"
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './Component/Courses';
import BlogPage from './Component/BlogPage';
import BlogDetails from './Component/BlogDetails';
import CourseVideo from './Component/CourseVideo';
import SignupForm from './Component/SignupForm';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/coursevideo/:courseId" element={<CourseVideo />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogdetails/:blogId" element={<BlogDetails />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;