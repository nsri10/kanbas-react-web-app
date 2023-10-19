import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
    <div>
      <div className="column2">
                            <button className="btn1 float-end" style={{marginLeft: 5}}>
                                <BsThreeDotsVertical aria-hidden="true"/>
                            </button>
                
                            <span className="float-end" style={{color: 'green', marginTop: 7, marginRight: -150}}>
                                <BsFillCheckCircleFill style={{color: 'green', marginRight: 5}}> </BsFillCheckCircleFill>
                                Published
                            </span>
                
                            <hr style={{marginTop: 50}}/>
                
                            <label for="assignmentName" className="form-label">Assignment Name</label>
                            <input value={assignment.title} className="form-control mb-2" />
                            <textarea className="form-control" cols="25" rows="5" style={{marginTop: 25}}>This is the assignment description
                            </textarea><br /><br />
                
                
                            <div className="row g-2">
                                <label className="form-label col-3" style={{textAlign: 'end'}}>Points</label>
                                <input className="form-control col-9" id="aPoints" value="100" type="number" style={{width: '50%'}} />
                            </div>
                <br/>
                            <div className="row">
                                <label className="form-label col-3" style={{textAlign: 'end'}}>Assignment Group</label>
                
                                <select className="form-control col-9" style={{width: '50%'}}>
                                    <option selected>ASSIGNMENTS</option>
                                </select>
                            </div>
                            <br/>
                            <div className="row">
                                <label className="form-label col-3" style={{textAlign: 'end'}}>Display Grade as</label>
                
                                <select className="form-control col-9" style={{width: '50%'}}>
                                    <option selected>Percentage</option>
                                </select>
                            </div>
                            <br/>
                            <div className="row">
                                <div style={{paddingLeft: '25%'}}>
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Do not count the assignment towards the final grade
                                    </label>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <label className="form-label col-3" style={{textAlign: 'end'}}>Submission Type</label>
                
                                <div className="col-9" style={{borderColor: 'lightgrey', borderStyle: 'solid', width: '50%', padding: 20}}>
                                    <select className="form-control col-9" style={{width: '50%'}}>
                                        <option selected>Online</option>
                                    </select>
                                    <br/>
                                    <label style={{fontWeight:'bold'}}>Online Entry Options</label><br />
                
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="text"/>
                                        <label className="form-check-label" for="text">
                                            Text Entry
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="url"/>
                                        <label className="form-check-label" for="url">
                                            Website URL
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="rec"/>
                                        <label className="form-check-label" for="rec">
                                            Media Recordings
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="anno"/>
                                        <label className="form-check-label" for="anno">
                                            Student Annotations
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <input className="form-check-input" type="checkbox" value="" id="file"/>
                                        <label className="form-check-label" for="file">
                                            File Uploads
                                        </label>
                                    </div>
                
                                </div>
                            </div>
                            <br/><br/>
                            <div className="row">
                                <label className="form-label col-3" style={{textAlign: 'end'}}>Assign</label>
                
                                <div className="col-9" style={{borderColor: 'lightgrey', borderStyle: 'solid', width: '50%', padding: 20}}>
                                    <div>
                                        <label className="form-check-label" for="assignTo">
                                            Assign To
                                        </label>
                                        <input className="form-control col-9" id="assignTo" value="Everyone" />
                
                                    </div>
                
                                    <br/>
                                    <div>
                                        <label>Due</label> <br />
                                        <input className="form-control" type="date" value="2021-01-01" /><br /><br />
                                    </div>
                
                                    <div className="row">
                                        <div className="col-6">
                                            <label>Available from</label> <br />
                                            <input className="form-control col-6" type="date" value="2021-01-01"
                                                style={{display: 'inline'}} /><br />
                
                                        </div>
                                        <div className="col-6">
                                            <label>Until</label> <br />
                                            <input className="form-control col-6" type="date" value="2021-01-01"
                                                style={{display: 'inline'}} /><br />
                
                                        </div>
                                    </div>
                
                                    <div className="row">
                                        <button className="btn1 float-end" style={{marginLeft: 25, width: 546, marginTop: 20, marginRight: 212}}>
                                            <i className="fas fa-plus"></i>
                                            Add
                                        </button>
                                    </div>
                
                                </div>
                            </div>
                            <br/><br/>
                            <div>
                                <hr />
                                <div>
                                    <br/>
                                    <div style={{paddingLeft: '10%'}}>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" for="flexCheckDefault">
                                            Notify users that this content has changed
                                        </label>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn1 float-end" style={{marginRight: 70}}
      > 
        Cancel
      </Link>
      <button onClick={handleSave} className="btn1 float-end" style={{color: 'white', backgroundColor: 'red'}}>
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
