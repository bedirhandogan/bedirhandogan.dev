import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";

function Home() {
    return (
        <div className={"app"}>
            <Navbar />
            <Introduction />
            <Experience />
        </div>
    )
}

export default Home;