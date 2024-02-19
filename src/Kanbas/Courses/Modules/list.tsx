// imported to src/Kanbas/Courses/Modules/index.tsx
//-----------------------------------------------------------------------------//
import React, { useState } from "react"; // must
import "./index.css"; // own css
import { modules } from "../../Database"; // database
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa"; // fontawesome
import { useParams } from "react-router"; // extract courseId
import { BsThreeDotsVertical } from "react-icons/bs";

//-----------------------------------------------------------------------------//
function ModuleList() {
  const { courseId } = useParams(); // extract router id in url
  const modulesList = modules.filter((module) => module.course === courseId); // use courseId
  const [selectedModule, setSelectedModule] = useState(modulesList[0]); // additional
  return (
    <>
      {/* Implement buttons Collapse All, View Progress, etc. here  */}
      {/* -------------------------------------------------------------------- */}
      <div className="button-container" style={{ paddingBottom: "10px" }}>
        <div className="mt-3  button-group">
          <button>Collapse All</button>
          <button>View Progress</button>
          <select>
            <option value="VAL1"> ✔ Publish All</option>
          </select>

          <button className="btn-module">+ Module</button>
          <button>
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
      {/* -------------------------------------------------------------------- */}
      <hr />
      <ul className="list-group wd-modules mt-5">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" /> {module.name}
              <span className="float-end">
                <span
                  style={{
                    display: "inline-block",
                    borderRadius: "10%",
                    border: "2px solid gray",
                    verticalAlign: "middle",
                    position: "relative",
                    left: "-10px",
                  }}
                >
                  40% of total
                </span>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>

            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
