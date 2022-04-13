import "./css/Projects.css";

const Component = (props) => {
    return (
        <div className="project-subsection">
            {props.projects.map((project, index) => {
                return (
                    <div className="row right-content" key={index}>
                        <h5>
                            <a className="h-link" href={project.link} target="blank">
                                {project.name}
                            </a>
                        </h5>

                        <p className="project-repo">
                            <i className="fab fa-github-square"></i>
                            <a className="h-link" href={project.link} target="blank">
                                {project.user} / {project.repository}
                            </a>
                        </p>
                        <p>
                            {project.description}&nbsp;
                            {project.sample || project.sample !== "" ? (
                                <span>
                                    Sample of this project is available{" "}
                                    <a href={project.sample} target="blank">
                                        here.
                                    </a>
                                </span>
                            ) : (
                                ""
                            )}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Component;
