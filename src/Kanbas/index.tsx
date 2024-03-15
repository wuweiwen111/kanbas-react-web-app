// 3: provider
// import Nav from "../Nav";
// 最左边的-----------------------------------------------------------------------------//
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import db from "./Database";
import * as db from "./Database";
import { useState } from "react";
//----------------------------------------------------
// 3: provider
import store from "./store";
import { Provider } from "react-redux";
// ----- interface
interface Course {
  _id: string; 
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image?: string; // image is optional 
}


function Kanbas() {
  // define the style for the conatiner, so no need to import ./Navigation/index.css
  const containerStyle: React.CSSProperties = {
    display: "flex",
    height: "100vh",
    flexDirection: "row",
  };

  // move all states from Dashboard to Kanbas
  const [courses, setCourses] = useState<Course[]>(db.courses);
  const [course, setCourse] = useState<Course>({
    _id: "RS101",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  // const template: Course = {
  //   _id: "RS101",
  //   name: "New Course",
  //   number: "New Number",
  //   startDate: "2023-09-10",
  //   endDate: "2023-12-15",
  // };

  // add course func
  // const addNewCourse = () => {
  //   setCourses([
  //     ...courses,
  //     { ...course, _id: new Date().getTime().toString() },
  //   ]);
  // };

  const addNewCourse = () => {
    setCourses([
      ...courses,
      {
        ...course,
        _id: new Date().getTime().toString(),
        image: "reactjs.jpg",
      },
    ]);
  };

  // delete course func
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  // update course func
  const updateCourse = () => {
    setCourses(courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      }),
    );
  };

  // Styles for the container
  // const containerStyle = {
  //   display: "flex",
  //   height: "100vh",
  //   flexDirection: "row",
  // };
  return (
    // <div className="d-flex" style={containerStyle}>
    <Provider store={store}> 
    <div className="d-flex" style={containerStyle}>
      <KanbasNavigation />

      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route
            path="Courses/:courseId/*"
            element={<Courses courses={courses} />}
          />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;
