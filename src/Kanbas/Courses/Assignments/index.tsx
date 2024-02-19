//-----------------------------------------------------------------------------//
import React from "react"; // must
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa"; // icon
import { BsThreeDotsVertical } from "react-icons/bs"; // icon
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database"; // json

//-----------------------------------------------------------------------------//
function Assignments() {
  const { courseId } = useParams(); // extract courseId from url
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  ); // use courseId here
  return (
    <>
      {/* Add buttons and other fields here  */}
      <div className="button-container d-flex align-items-center p-2">
        <input
          placeholder="Search for Assignment"
          className="search form-control w-25"
        />
        <div className="ms-auto button-group">
          <button className="btn-module" style={{color:"black", backgroundColor:"lightgray"}}>+ Group</button>
          <button className="btn-module" >+ Assignment</button>
          <button>
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      {/* assignment content start*/}
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> Assignments 
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>

          <ul className="list-group">
            {assignmentList.map((assignmet) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignmet._id}`}
                >
                  {assignmet.title}
                </Link>
                {/* end at row: plus and 3-dot */}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Assignments;
