import './styles.css';
import {EyeIcon, RepoForkedIcon, RepoIcon, StarIcon} from "@primer/octicons-react";
function GithubRepository({name, description, url, star, watch, forks, language}) {
    return (
        <div className="repository">
            <div>
                <h4 className="name">
                    <div>
                        <RepoIcon size={18} fill="#737373FF" />
                        <a href={url} target="_blank" rel="noreferrer">{name}</a>
                    </div>
                    <div className="language">
                        <div className={`circle ${language?.toLowerCase()}`}></div>
                        <div className="name">{language}</div>
                    </div>
                </h4>
                <p className="paragraph">{description}</p>
            </div>
            <div className="details">
                <div className="detail">
                    <StarIcon size={16} fill="#737373FF" />
                    {star} stars
                </div>
                <div className="detail">
                    <EyeIcon size={16} fill="#737373FF" />
                    {watch} watching
                </div>
                <div className="detail">
                    <RepoForkedIcon size={16} fill="#737373FF" />
                    {forks} forks
                </div>
            </div>
        </div>
    );
}

export default GithubRepository;