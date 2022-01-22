import "./css/Publications.css";

const Component = (props) => {
    return (
        <div className="research-subsection">
            <h5 className="research-subsection-header">Journals</h5>
            {props.journals.map((journal, index) => {
                return (
                    <div key={index} className="row right-content">
                        <h5>
                            <a href={journal.link} target="blank">
                                {journal.title}
                            </a>
                        </h5>
                        <p>
                            <i className="fas fa-user-friends"></i>
                            {journal.authors.map((author, index, arr) => {
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
                            <i className="fas fa-newspaper"></i>
                            {journal.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Component;
