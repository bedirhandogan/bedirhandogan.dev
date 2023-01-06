import './styles.css';
import {BriefcaseIcon, CalendarIcon} from "@primer/octicons-react";

function Experience() {
    return (
        <div className="experience-container" id="experience">
            <h4 className="title">Experience</h4>
            <div className="experience">
                <h3 className="title">Front-end Developer</h3>
                <div className="company"><BriefcaseIcon size={16} fill="#737373FF" /> Freelance </div>
                <div className="date-range"><CalendarIcon size={16} fill="#737373FF" /> Jan 2021 - Present</div>
            </div>
        </div>
    );
}

export default Experience;