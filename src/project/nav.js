import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    const screens = ["signin", "signup", "account", "table"];
    return (
        <div style={{width: 100, margin: 10}} className="list-group">
            {screens.map((screen) => (
                <Link
                    key={screen}
                    to={`/project/${screen}`}
                    className="list-group-item"
                >
                    {screen}
                </Link>
            ))}
        </div>
    );
}

export default Navigation;