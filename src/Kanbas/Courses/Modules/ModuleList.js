import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>         
    <ul className="list-group">
    <li className="list-group-item">
        <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
        Add
        </button>
        <button onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
  }/>
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
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