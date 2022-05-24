import { useState, useEffect } from "react";
import { SiMusescore, SiResearchgate } from "react-icons/si";

import "./css/Home.css";

const Home = () => {
    const [content, setContent] = useState({
        position: "Position",
        organization: "Organization",
        about: "About",
    });

    useEffect(() => {
        // GET Projects
        fetch(process.env.REACT_APP_STATIC_URL + "/data/Home.json")
            .then((res) => res.json())
            .then((content) => {
                setContent(content);
            });
    }, []);

    return (
        <div>
            <div className="row">
                <div className="about-photo row d-lg-block d-none">
                    <img src={process.env.REACT_APP_STATIC_URL + "/img/profile.jpg"} alt="profile" />
                </div>
            </div>

            <div className="current-position">
                <p className="position">{content.position}</p>
                <p className="organization">
                    <i class="far fa-building"></i> {content.organization}
                </p>
            </div>

            <div className="row d-sm-none d-block">
                <h1>&nbsp;</h1>
            </div>
            <div className="row">
                <div className="about-text col-lg-8 col-11">{content.about}</div>
            </div>
            <a
                className="resume-button-link"
                href={process.env.REACT_APP_STATIC_URL + "/static/Arnab_Mukherjee_Resume.pdf"}
                target="blank"
            >
                <div className="row resume-button">
                    <p>
                        <i className="fas fa-download"></i> Download Resume
                    </p>
                </div>
            </a>
            <div className="row">
                <div className="about-social col-lg-10 col-11">
                    <div className="row justify-content-center">
                        <div className="about-contact col-lg-4 col-11">
                            <i className="fab fa-github"></i>
                            <a href="https://github.com/mukherjeearnab" target="blank">
                                @mukherjeearnab
                            </a>
                        </div>
                        <div className="about-contact col-lg-4 col-11">
                            <i className="fab fa-twitter"></i>
                            <a href="https://twitter.com/arnabm905" target="blank">
                                @arnabm905
                            </a>
                        </div>
                        <div className="about-contact col-lg-4 col-11">
                            <i className="fab fa-linkedin"></i>
                            <a href="https://www.linkedin.com/in/arnabm99/" target="blank">
                                @arnabm99
                            </a>
                        </div>
                        <div className="about-contact col-lg-4 col-11">
                            <i>
                                <SiResearchgate />
                            </i>
                            <a href="https://www.researchgate.net/profile/Arnab-Mukherjee-13" target="blank">
                                ResearchGate
                            </a>
                        </div>
                        <div className="about-contact col-lg-4 col-11">
                            <i>
                                <SiMusescore />
                            </i>
                            <a href="https://musescore.com/user/33838958" target="blank">
                                @quinn1601
                            </a>
                        </div>
                        <div className="about-contact col-lg-4 col-11">
                            <i className="fas fa-camera-retro"></i>
                            <a href="https://mukherjeearnab.github.io/photography" target="blank">
                                /photography
                            </a>
                        </div>
                        <div className="about-contact col-lg-4 col-11">
                            <i className="far fa-envelope-open"></i>
                            <a href="mailto:arnabm1099@gmail.com">arnabm1099@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
