import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  // deleteModule,
  // updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
import { findModulesForCourse } from "./client";
import { createModule } from "./client";
function ModuleList() {
  const { courseId } = useParams();
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(status);
    });
  };
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(status);
  };
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);

  return (
    <div>         
    <ul className="list-group">
    <li className="list-group-item">
        <button className="btn1" onClick={handleAddModule}>
        Add
        </button>
        <button style={{marginLeft: 5}} className="btn1" onClick={handleUpdateModule}>
                Update
        </button>
        <br/><br/>
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
  }/>
  <br/>
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button className="btn1"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button style={{marginLeft: 5}} className="btn1"
              onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>
            <br/><br/>
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