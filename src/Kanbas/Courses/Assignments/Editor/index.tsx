import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs"; // icon
import { TbCircleCheckFilled } from "react-icons/tb"; // icon

function AssignmentEditor() {
  const { assignmentId } = useParams(); // extract courseId from url path
  const assignment = assignments.find((each) => each._id === assignmentId); // find assignment
  const { courseId } = useParams(); // extract courseId from url path
  const navigate = useNavigate();
  const handleSaveOrCancel = () => navigate(`/Kanbas/Courses/${courseId}/Assignments`); // same path with for save and cancel


  return (
    <div>
      <div className="mt-3" style={{ display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
      <TbCircleCheckFilled style={{ color: "green" }} />

        <span style={{ color: "green", marginLeft:"10px" }}>Published</span>
        <button style={{marginLeft:"10px",     padding: "5px 5px", border:"none", cursor:"pointer", display:"flex"
}}>
          <BsThreeDotsVertical />
        </button>
      </div>
      <hr />
      <div>
        <h2 className=" mb-3">Assignment Name</h2>
        <input value={assignment?.title} className="form-control mb-2" />
        <hr />
        {/* bottons on right */}
        <button
          onClick={handleSaveOrCancel}
          className="btn btn-danger ms-2 float-end"
          style={{}}
        >
          Save
        </button>
        <button
          onClick={handleSaveOrCancel}
          className="btn  ms-2 float-end"
          style={{ backgroundColor: "lightgray" }}
        >
          Cancel
        </button>

        {/* <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn  float-end" style={{backgroundColor:"lightgray"}}>Cancel</Link> */}
      </div>
    </div>
  );
}

export default AssignmentEditor;
