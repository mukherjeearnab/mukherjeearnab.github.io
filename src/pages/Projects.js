import { useState, useEffect } from "react";

import "./css/Publications.css";

import Projects from "../components/Projects";

const Page = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // GET Projects
        fetch(process.env.REACT_APP_STATIC_URL + "/data/Projects.json")
            .then((res) => res.json())
            .then((content) => {
                setProjects(content);
            });
    }, []);
    return (
        <div className="row">
            <div className="col-sm-7 col-11 publications">
                <h4>
                    <i className="fas fa-drafting-compass"></i>Projects
                    <a href="https://github.com/mukherjeearnab" target="blank">
                        <i className="fab fa-github gscholar"></i>
                    </a>
                </h4>
                <Projects projects={projects} />
            </div>
        </div>
    );
};

export default Page;
