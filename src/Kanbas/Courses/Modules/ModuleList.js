import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
                    {/* <div>
                        <button class="btn1 float-end" style={{marginRight: 20, paddingTop: 10, paddingBottom: 14}}>
                            <i class="fas fa-ellipsis-v"></i>
                        </button>
                        <button class="btn2 float-end" style={{marginRight: 3}}> Module</button>

                        <div class="dropdown">
                            <button class="btn1 dropdown-toggle float-end" style={{marginRight: 65}}
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="far fa-circle-check fa-2x"></i>
                                Publish All 
                            </button>
                        </div>
                        <button class="btn1 float-end" style={{marginRight: 5}}>View Progress</button>
                        <button class="btn1 float-end" style={{marginRight: 6}}>Collapse All</button>

                    </div> */}
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            {module.lessons &&
              module.lessons.map((lesson, index) => (
                <div key={index}>
                  <h4>{lesson.name}</h4>
                  <p>{lesson.description}</p>
                </div>
              ))}
          </li>
        ))}
    </ul> 
    </div>
  );
}
export default ModuleList;