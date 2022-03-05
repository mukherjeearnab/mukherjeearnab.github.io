import { useState, useEffect } from "react";

import "./css/Publications.css";

import Journals from "../components/Journals";
import Conferences from "../components/Conferences";

const Page = () => {
    const [journals, setJournals] = useState([]);
    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        // GET Journals
        fetch(process.env.REACT_APP_STATIC_URL + "/data/Journals.json")
            .then((res) => res.json())
            .then((content) => {
                setJournals(content);
            });
    }, []);

    useEffect(() => {
        // GET Conferences
        fetch(process.env.REACT_APP_STATIC_URL + "/data/Conferences.json")
            .then((res) => res.json())
            .then((content) => {
                setConferences(content);
            });
    }, []);
    return (
        <div className="row">
            <div className="col-sm-7 col-11 publications">
                <h4>
                    <i className="fas fa-microscope"></i>Publications
                    <a href="https://scholar.google.com/citations?hl=en&user=bvqBMKgAAAAJ" target="blank">
                        <i className="fas fa-external-link-alt gscholar"></i>
                    </a>
                </h4>
                <Journals journals={journals} />
                <Conferences conferences={conferences} />
            </div>
        </div>
    );
};

export default Page;
