import React from "react";
import ModulesList from "../Modules/list";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./index.css";
import { FaCalendarAlt } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        {/* module content */}
        <div className="modules-list-container flex-fill">
          <ModulesList />
        </div>

        {/* course status on the right */}
        <div
          className="flex-grow-0 me-2 d-none d-lg-block mt-3"
          style={{ width: "250px", marginLeft: "20px" }}
        >
          <h3>Course Status</h3> <hr />
          <div className="mt-3">
            <button className="btn btn-primary btn-unpublished">
              Unpublished
            </button>
            <button className="btn btn-primary btn-published">Published</button>
          </div>
          {/* all buttoms */}
          <div className="course-status-item">
            <Link to="#" className="mt-3">
              Import Existing Content
            </Link>
            <Link to="#">Import From Commons</Link>
            <Link to="#">Choose Home Page</Link>
            <Link to="#">View Course Stream</Link>
            <Link to="#">New Announcement</Link>
            <Link to="#">New Analytics</Link>
            <Link to="#">View Course Notifications</Link>
          </div>
          {/* to do */}
          <div className="todo-container">
            <h5>To Do</h5> <hr />
            <ul className="todo-top">
              <Link to="#" className="todo">
                Grade A1 - ENV + HTML
              </Link>
              <span className="todo-detail">
                100 points - Jan 10 at 11:59pm
              </span>
            </ul>
          </div>
          {/* coming up start*/}
          <div className="coming-up-container">
            <div className="coming-up-header">
              <h5>Coming Up</h5>
            </div>
            <Link to="#" className="calendar-link">
              <FaCalendarAlt />
              View Calendar
            </Link>
          </div>
          <hr />
          <ul className="coming-up-group">
            <li>
              <Link to="#">Lecture CS4550 Sep 7 at 12:00pm</Link>
            </li>
          </ul>
          {/* coming up end*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
