import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BiPrinter } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Groups", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-2 text" />,
    Dashboard: <RiDashboard3Line className="fs-2 text" style={{color: '#d41b2c'}}/>,
    Courses: <FaBook className="fs-2 text" style={{color: '#d41b2c'}}/>,
    Groups: <BsPeople className="fs-2 text" style={{color: '#d41b2c'}}/>,
    Calendar: <BsCalendar2Week className="fs-2 text" style={{color: '#d41b2c'}}/>,
    Inbox: <BiPrinter className="fs-2 text" style={{color: '#d41b2c'}}/>,
    History: <BsClock className="fs-2 text" style={{color: '#d41b2c'}}/>,
    Studio: <MdOndemandVideo className="fs-2 text" style={{color: '#d41b2c'}}/>,
    Commons: <FaArrowRight className="fs-2 text" style={{color: '#d41b2c'}}/>,
    Help: <BsQuestionCircle className="fs-2 text" style={{color: '#d41b2c'}} />,
  };

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation list-group wd-padding-fat" style={{ width: 85, height: 1000 }}>
        <div class="wd-bg-color-black center">
            <img width="70" src="https://brand.northeastern.edu/wp-content/uploads/2022/05/red_monogram.png"></img>         
        </div>
        <div>
        {links.map((link, index) => (
            <Link
            style={{fontSize: 14}}
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item text-center p-2 ${
                pathname.includes(link) && "active"
            }`}
            >
            {linksToIconsMap[link]}
            <br />
            {link}
            </Link>
        ))}
        </div>
    </div>
  );
}
export default KanbasNavigation;