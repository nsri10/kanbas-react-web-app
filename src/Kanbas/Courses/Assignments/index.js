import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { BiSolidBookBookmark } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <div>
                        <input type="text" placeholder="Search for Assignment" style={{width: 300,padding: 10}} />

                        <button class="btn1 float-end" style={{marginRight: 10, paddingTop: 10, paddingBottom: 6}}>
                            <BsThreeDotsVertical/>
                        </button>
                        <button class="btn2 float-end" style={{marginRight: 55}}>
                            <BsPlusLg/>
                            Assignment
                        </button>

                        <button class="btn1 float-end" style={{marginRight: 185}}>
                            <BsPlusLg/>
                            Group
                        </button>
                    </div>
      <div className="list-group" style={{marginTop: 30, width: 1070}}> 
      <div className="list-item" style={{backgroundColor: 'lightgray'}}> <h4 style={{marginLeft: 30, marginTop: 10, padding: 5}}>ASSIGNMENTS</h4> </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            {assignment.title}
            <div style={{verticalAlign: 'middle', display: 'inline', marginTop: 150}}
                                className="align-middle">
                                <BsThreeDotsVertical className="float-end align-middle;" aria-hidden="true"
                                    style={{marginLeft: 10, marginTop: 18, marginRight: -180}}/>
                                <BsFillCheckCircleFill className="float-end align-middle"
                                    style={{color: 'green', marginTop: 18, marginRight: -150}}/>

                                <BiSolidBookBookmark class="float-start" style={{margin: 10, color: 'green'}}/>
                            </div>
          </Link>
        ))} 
      </div>
    </div>
  );
}
export default Assignments;