// import { React, useState } from "react";
// import { Link } from "react-router-dom";
// import db from "../Database";
// import "./index.css";
// function Dashboard() {
//   const [courses, setCourses] = useState(db.courses);
//   return (
//     <div style={{padding: 15}}>
//       <div>
//       <h1>Dashboard</h1>
//       <hr />
//       <h2>Published Courses</h2>
//       <hr />
//       </div>
//       <div >
//         {courses.map((course) => (
//           <Link
//             key={course._id}
            
//             to={`/Kanbas/Courses/${course._id}`}
//             className="card course-card"
//             style={{ width: "18rem" }}
//           > 
//           <img src="https://www.creativefabrica.com/wp-content/uploads/2020/04/16/Purple-Rectangle-Polygon-Background-Graphics-3882300-1.jpg" class="card-img-top" alt="...">
//           </img>
//             {course.number} <br/>
//             {course.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Dashboard;


import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { React, useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={updateCourse}>Update</button>

      <button onClick={addNewCourse}>Add</button>
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />

      <div className="list-group">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
            style={{width: 400}}
          >
            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}
            >
              Delete
            </button>

            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </button>
            <img src="https://www.creativefabrica.com/wp-content/uploads/2020/04/16/Purple-Rectangle-Polygon-Background-Graphics-3882300-1.jpg" class="card-img-top" alt="...">
          </img>
            {course.number} <br/>
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;