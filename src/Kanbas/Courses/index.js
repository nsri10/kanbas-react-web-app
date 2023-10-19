import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor/AssignmentEditor";
import Breadcrumb from 'rsuite/Breadcrumb';
import { FiMenu } from "react-icons/fi";
function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const curUrl = window.location.href;
  const split = curUrl.split("/");
  const curPage = split.pop();
  const courseURL = split.join("/");
  const homeURL = courseURL.concat("/")
  return (
    <div>
      <div>
      <FiMenu className="wd-fg-color-red fs-2" style={{margin: 30}}/>
            <Breadcrumb separator={'>'}
                style={{ marginLeft: 75, marginTop: -60 }}>
                <Breadcrumb.Item href={homeURL}
                    style={{
                        marginRight: '6px',
                        marginLeft: '6px',
                        color: '#D41B2C'
                    }}>
                    {course.number}
                </Breadcrumb.Item>
                <Breadcrumb.Item active
                    style={{
                        marginRight: '6px',
                        marginLeft: '6px',
                        color: 'black'
                    }}>
                    {curPage}
                </Breadcrumb.Item>
 
            </Breadcrumb>
            </div>
      <div> 
        <div style={{marginTop: 40}}><CourseNavigation/></div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "300px",
            top: "100px",
          }}
        >
          <h1>Course {course.name}</h1>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;