// imported to src/Kanbas/Courses/Modules/index.tsx
//-----------------------------------------------------------------------------//
import React, { useState } from "react"; // must
import "./index.css"; // own css
// import { modules } from "../../Database"; // database
import * as db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa"; // fontawesome
import { useParams } from "react-router"; // extract courseId
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";

//-----------------------------------------------------------------------------//
function ModuleList() {
  const { courseId } = useParams(); // extract router id in url
  // after import reducer
  // const moduleList = useSelector((state) => state.modulesReducer.modules);
  const modules = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  // before import reducer
  // const modulesList = modules.filter((module) => module.course === courseId); // use courseId
  // const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  // const [moduleList, setModuleList] = useState(modules);
  // // create new module
  // const [module, setModule] = useState({
  //   _id: "0",
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId || "",
  // });

  // // add module
  // const addModule = (module: any) => {
  //   const newModule = { ...module, _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // // delete module
  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId
  //   );
  //   setModuleList(newModuleList);
  // };

  // // update module
  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       // Ensure all expected properties, including 'lessons', are present
  //       return {
  //         ...m, // keeps existing module properties, including lessons
  //         ...module, // applies updates, possibly overriding some properties but not 'lessons'
  //       };
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };

  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };

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
        {/* after import reducer */}
        <li className="list-group-item">
          <input
            className="form-control mb-2 mt-2"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
            className="btn btn-primary mt-2 mb-2"
          >
            Add
          </button>
          <button
            onClick={() => dispatch(updateModule(module))}
            className="btn btn-success"
          >
            Update
          </button>
        </li>

        {modules
          .filter((module) => module.course === courseId) // new list
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                className="btn btn-success"
                onClick={(event) => dispatch(setModule(module))}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <FaEllipsisV className="me-2" /> {module.name}
                  <p style={{ marginBottom: 0 }}>{module.description}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      display: "inline-block",
                      borderRadius: "10%",
                      border: "2px solid gray",
                      verticalAlign: "middle",
                      marginRight: "8px",
                    }}
                  >
                    40% of total
                  </div>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </div>
              </div>
              {/* lesson name */}
              {module.lessons && (
                <ul className="list-group">
                  {module.lessons.map((lesson: any, index: any) => (
                    <li key={index} className="list-group-item">
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
