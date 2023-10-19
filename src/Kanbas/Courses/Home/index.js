import ModuleList from "../Modules/ModuleList";
import "./index.css";

function Home() {
  return (
    <div className="row">
      <div className="col-10">
        <ModuleList />
      </div>
      <div className="col-2">
        <div className="column3">
                    <div>
                        <h5>Course Status</h5>
                        <button className="btn1" style={{flexShrink: 1}}>Unpublish</button>
                        <button className="btn1" style={{flexShrink: 1, backgroundColor: 'green', color: 'white'}}><i
                                className="far fa-check-circle"></i>
                            Published</button>
                    </div>

                    <div style={{marginTop: 20}}>
                        <button className="btn1">Import Existing Content</button><br />
                        <button className="btn1">Import From Commons</button><br />
                        <button className="btn1">Choose Home Page</button><br />
                        <button className="btn1">View Course Stream</button><br />
                        <button className="btn1">New Announcement</button><br />
                        <button className="btn1">New Analytics</button><br />
                        <button className="btn1">View Course Notificiations</button><br />
                    </div>

                    <div style={{marginTop: 20}}>
                        <h5>To Do</h5>
                        <hr />

                    </div>

                    <div style={{marginTop: 20}}>
                        <h5>Coming Up</h5>
                        <a className="wd-fg-color-red float-end" style={{marginRight: -180}} href="#"> View Calendar</a>
                        <i className="far fa-calendar-day float-end"></i>
                        <br />
                        <hr />

                        <div>
                            <i className="far fa-calendar-day" ></i>
                            <div className="calendar-event">
                                <a className="wd-fg-color-red calendar-event-title" href="#">Lecture</a>
                                <p>CS4550.12641.202410<br />
                                    Sep 7 at 11:45am
                                </p>
                            </div>

                            <i className="far fa-calendar-day"></i>
                            <div className="calendar-event">
                                <a className="wd-fg-color-red calendar-event-title" href="#">Lecture</a>
                                <p>CS4550.12641.202410<br />
                                    Sep 11 at 11:45am
                                </p>
                            </div>

                            <i className="far fa-calendar-day"></i>
                            <div className="calendar-event">
                                <a className="wd-fg-color-red calendar-event-title" href="#">CS5610 06 SP23 Lecture</a>
                                <p>CS4550.12641.202410<br />
                                    Sep 7 at 11:45am
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
}
export default Home;