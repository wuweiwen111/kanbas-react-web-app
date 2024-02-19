// imported to /src/Kanbas/Courses/index.tsx
//-----------------------------------------------------------------------------//
import { Link, useLocation } from "react-router-dom";
import "./index.css";
//-----------------------------------------------------------------------------//
function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meeting",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ]; // links is object
  const { pathname } = useLocation(); // useLocation is to highlight

  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          {/* <Link> == <a> */}
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;
