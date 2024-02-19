// import Nav from "../Nav";
// 最左边的-----------------------------------------------------------------------------//
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
//-----------------------------------------------------------------------------//
function Kanbas() {
  // define the style for the conatiner, so no need to import ./Navigation/index.css
  const containerStyle: React.CSSProperties = {
    // Use React.CSSProperties for accurate typing
    display: "flex",
    height: "100vh",
    flexDirection: "row",
  };
  return (
    <div style={containerStyle}>
      <KanbasNavigation /> 
      
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
