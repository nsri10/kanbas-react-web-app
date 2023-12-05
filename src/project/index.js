import { Routes, Route, Navigate } from "react-router";
import Signin from "./users/signin"
import Account from "./users/account";
import UserTable from "./users/table";
import Navigation from "./nav";
import Signup from "./users/signup";
import Nav from "../Nav";

function Project() {
    return (
        <div className="container-fluid row">
            <Nav />
            <div className="col-2">
                <Navigation />
            </div>
            <div style={{margin: 20, width: 500}} className="col-10">
                <h1>Project</h1>
                <Routes>
                    <Route path="/" element={<Navigate to="project/signin" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />} />
                </Routes>
            </div>
        </div>
    );
}

export default Project;