import "./index.css";
import { BsFillPencilFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import AccountEdit from "./AccountEditor/AccountEditor";
function Account() {
    return(
        <div>
            <h2 style={{margin: 30}}> Alice Wonderland's Profile</h2>
            <div className="column2">
            <Link
            to={`/Kanbas/Account/AccountEditor/AccountEditor.js`}
          >
            <a className="btn1 float-end">
                <BsFillPencilFill/>
                        Edit Profile
                </a>
          </Link>
                
                <BiUserCircle size={200}/>
                <br/>
                <h2>Alice Wonderland</h2>
                <br/>
                <h3>Contact</h3>
                No registered services, you can add some on the <a className="wd-fg-color-red" href="#">settings</a> page.
                <br/>
                <br/>
                <h3>Biography</h3>
                Faculty, Software Engineer, AI, Space
                <br/>
                <br/>
                <h3>Links</h3>
                <i className="fas fa-link"></i>
                        <a className="wd-fg-color-red" href="https://www.youtube.com/@WebDevTV">YouTube</a>
            </div>
        </div>
    );
}
export default Account;