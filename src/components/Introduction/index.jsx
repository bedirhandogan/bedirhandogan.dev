import './styles.css';
import getRepositoriesDetail from "../../services";
import {useEffect, useState} from "react";
import {ArrowDownIcon} from "@primer/octicons-react";
import GithubRepository from "../Repository";

function Introduction() {
    const [repository, setRepository] = useState([]);

    useEffect(() => {
        getRepositoriesDetail().then(r => setRepository(r.slice(0, 1)))
    }, []);

    return (
        <div className="introduction-container">
            <div className="about">
                <h4 className="title">Bedirhan Doğan</h4>
                <p className="paragraph">
                    Hi 👋, I am Front-end developer since 2020.
                </p>
            </div>
            <div className="work-preview">
                { repository.map((v, i) => <GithubRepository name={v.name} description={v.description} url={v.html_url} star={v.stargazers_count} watch={v.watchers_count} forks={v.forks} language={v.language} key={i} />) }
                <a href="#works"><ArrowDownIcon size={16} /></a>
            </div>
        </div>
    );
}

export default Introduction;