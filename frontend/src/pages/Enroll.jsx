import  { useState, useEffect } from 'react';
// import axios from 'axios';
import CustomNavbar from '../components/CustomNavbar';
import { userCourseList } from '../services/user';
import {unenrollUserCourse} from '../services/user';
import "../assets/css/enroll.css";
const Enroll = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      fetchCourses();
  }, []);
  
  const fetchCourses = () => {
      userCourseList()
          .then(response => {
              setCourses(response.data.data);
          })
          .catch(error => {
              console.error("Error fetching courses:", error);
          });
  };

  const handleUnenroll = async (userCourseId) => {
    try {
      // Remove the course from the backend
      await unenrollUserCourse(userCourseId);

      // Remove the course from the frontend by filtering out the unenrolled course
      setCourses(prevCourses => prevCourses.filter(course => course.userCourse_id !== userCourseId));
    } catch (error) {
      console.error("Error unenrolling course:", error);
    }
  };
  return (
    <>
      <CustomNavbar />
      
      <div className="courses-container" style={{marginLeft:"80px",marginTop:"6px",width:"10%"}}>
        {courses.map(course => (
          <div className="horizontal-card" key={course.userCourse_id}  >
            <div className="card-content">
              <h5 className="card-title1">Course</h5>
              <br />
              <p className="card-description">{course.course_name}</p>
            </div>
            <div className="card-content">
              <h5 className="card-title1">Duration</h5>
              <br />
              <p className="card-description">{course.duration}</p>
            </div>
            <button className="enrollbutton" onClick={() => handleUnenroll(course.userCourse_id)}>Unenroll</button>
            <div>
              <br></br>
            </div>

          </div>
       
        ))}

      </div>
      </>
  );
};

export default Enroll;