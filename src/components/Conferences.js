import "./css/Publications.css";

const Component = (props) => {
    return (
        <div className="research-subsection">
            <h5 className="research-subsection-header">Conference Proceedings</h5>
            {props.conferences.map((conference, index) => {
                return (
                    <div key={index} className="row right-content">
                        <h5>
                            <a href={conference.link} target="blank">
                                {conference.title}
                            </a>
                        </h5>

                        <p>
                            <i className="fas fa-user-friends"></i>
                            {conference.authors.map((author, index, arr) => {
                                if (index !== arr.length - 1) {
                                    return (
                                        <a key={index} className="h-link" href={author.link} target="blank">
                                            {author.name},&nbsp;
                                        </a>
                                    );
                                } else {
                                    return (
                                        <a key={index} className="h-link" href={author.link} target="blank">
                                            {author.name}
                                        </a>
                                    );
                                }
                            })}
                        </p>

                        <p>
                            <i className="fas fa-book"></i>
                            {conference.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Component;
