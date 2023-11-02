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
import "./index.css";
import { React } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }) {

  return (
    <div>
      <div style={{marginLeft: 20}}>
      <h1>Dashboard</h1>
      <button className="btn1" onClick={updateCourse}>Update</button>

      <button className="btn1" onClick={addNewCourse}>Add</button>
      <br/><br/>
      <h5>Course</h5>
      <input
        style={{width: '99%'}}
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        style={{width: '99%'}}
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        style={{width: '99%'}}
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        style={{width: '99%'}}
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
    </div>
      <div>
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="card course-card"
            style={{width: 400, padding: 10}}
          >
            <button className="btn1"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

            <button className="btn1" style={{marginLeft: 85, marginTop: -42}}
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
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