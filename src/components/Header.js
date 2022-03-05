import "./css/Header.css";

import { Link } from "react-router-dom";

import ThemeManager from "./ThemeManager";

const Component = (props) => {
    return (
        <div className="header row">
            <div className="col-sm-5">
                <div className="header-photo row d-sm-none d-block">
                    <img src="/img/profile.jpg" alt="profile" />
                </div>
                <h3>
                    <img className="d-none d-sm-inline-block" src="/img/profile.jpg" alt="profile" />
                    <Link to={"/"} className="header-title">
                        &nbsp;Arnab Mukherjee
                    </Link>
                </h3>
            </div>
            <div className="col-sm-7 header-links">
                <h5 className="d-sm-none d-block">
                    <ThemeManager />
                </h5>
                <p>
                    <span>
                        <Link to={"/"}>About Me</Link>
                    </span>
                    <span>
                        <Link to={"/publications"}>Publications</Link>
                    </span>
                    <span>
                        <Link to={"/projects"}>Projects</Link>
                    </span>
                    <span>
                        <Link to={"/posts"}>Posts</Link>
                    </span>
                    <span>
                        <a
                            href={process.env.REACT_APP_STATIC_URL + "/static/Arnab_Mukherjee_Resume.pdf"}
                            target="blank"
                        >
                            Resume
                        </a>
                        &nbsp;&nbsp;
                        <i className="fas fa-external-link-alt"></i>
                    </span>
                    <span className="d-none d-sm-inline-block">
                        <ThemeManager />
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Component;
