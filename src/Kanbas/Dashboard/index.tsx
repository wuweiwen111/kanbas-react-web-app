//-----------------------------------------------------------------------------//
import React from "react"; // must
import { Link } from "react-router-dom"; // hyperlink
import { courses } from "../Database"; // json for courses database
import courseImage from "./reactjs.jpg"; // image
import "./index.css"; // dashboard css
//-----------------------------------------------------------------------------//
function Dashboard() {
  return (
    // copy from public/kanbas/dashboard/html
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses(3)</h2>
      <hr />

      <div className="row">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
          {/* for each course, i am doing ... */}
          {/* card start */}
          {courses.map((course) => (
            <div
              key={course._id}
              className="col custom-card-spacing"
              style={{ width: 300 }}
            >
              <div className="card">
                <img
                  src={courseImage}
                  className="card-img-top"
                  style={{ height: 150 }}
                  alt={`Cover for ${course.name}`}
                />

                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {/* display which course name */}
                    {course._id}
                  </Link>

                  <p className="card-text">{course.name}</p>

                  {/* button */}
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* card end */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
