import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import About from "../components/About";

function Home() {
    return (
        <div className={"app"}>
            <Navbar />
            <Introduction />
            <About />
            <Experience />
        </div>
    )
}

export default Home;