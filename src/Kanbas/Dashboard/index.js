import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard() {
  const courses = db.courses;
  return (
    <div style={{padding: 15}}>
      <div>
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses</h2>
      <hr />
      </div>
      <div >
        {courses.map((course) => (
          <Link
            key={course._id}
            
            to={`/Kanbas/Courses/${course._id}`}
            className="card course-card"
            style={{ width: "18rem" }}
          > 
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