import "./css/Header.css";

import { Link } from "react-router-dom";

import ThemeManager from "./ThemeManager";

const Component = (props) => {
    return (
        <div className="header row">
            <div className="col-sm-5">
                <div className="header-photo row d-sm-none d-block">
                    <img className="" src="/img/profile.jpg" alt="profile" />
                </div>
                <h3>
                    <img className="d-none d-sm-inline-block" src="/img/profile.jpg" alt="profile" />
                    &nbsp;Arnab Mukherjee
                </h3>
            </div>
            <div className="col-sm-7 header-links">
                <h5 className="d-sm-none d-block">
                    <ThemeManager />
                </h5>
                <ul>
                    <li>
                        <Link to={"/"}>About Me</Link>
                    </li>
                    <li>
                        <Link to={"/publications"}>Publications</Link>
                    </li>
                    <li>
                        <Link to={"/projects"}>Projects</Link>
                    </li>
                    <li>
                        <Link to={"/education"}>Education</Link>
                    </li>
                    <li>
                        <a href="/resume" target="blank">
                            Resume
                        </a>
                        &nbsp;&nbsp;
                        <i className="fas fa-external-link-alt"></i>
                    </li>
                    <li className="d-none d-sm-inline-block">
                        <ThemeManager />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Component;
