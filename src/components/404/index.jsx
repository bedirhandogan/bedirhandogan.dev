import './styles.css'
import useThemeSelector from "../../hooks/useThemeSelector";
import {Link} from "react-router-dom";
import {ArrowRightIcon} from "@primer/octicons-react";

function FourHundredFour() {
    useThemeSelector();

    return (
        <div className="not-found-container">
            <div>
                <h1>404</h1>
                <div>page not found</div>
            </div>
            <Link to="/">
                <h6>return to home page <ArrowRightIcon size={20} /></h6>
            </Link>
        </div>
    );
}

export default FourHundredFour;