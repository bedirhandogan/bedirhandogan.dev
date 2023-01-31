import './styles.css';
import GithubRepository from "../Repository";
import getRepositoriesDetail from "../../services";
import {useEffect, useState} from "react";

function Works() {
    const [_repositories, _setRepositories] = useState([]);
    const [repoCount, setRepoCount] = useState(0);
    const repos = _repositories.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at));

    const showMoreClickHandler = () => setRepoCount(prevState => prevState + Math.floor(_repositories.length / 2));

    useEffect(() => {
        getRepositoriesDetail().then(v => _setRepositories(v));
        setRepoCount(Math.floor(_repositories.length / 2));
    }, [_repositories.length]);

    return (
        <div className="works-container" id="works">
            <h4>Works</h4>
            <div className="works">
                { repos.reverse().slice(0, repoCount).map((v, i) => <GithubRepository
                    name={v.name}
                    description={v.description}
                    url={v.html_url}
                    star={v.stargazers_count}
                    watch={v.watchers_count}
                    forks={v.forks}
                    language={v.language}
                    key={i}
                />) }
            </div>
            <div className="show-more-btn"
                 style={repoCount >= _repositories.length ? {display: "none"} : {display: "block"}} onClick={showMoreClickHandler}>Show More</div>
        </div>
    );
}

export default Works;