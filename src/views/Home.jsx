import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import About from "../components/About";
import Works from "../components/Works";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className={"app"}>
            <Navbar />
            <Introduction />
            <About />
            <Experience />
            <Works />
            <Footer />
        </div>
    )
}

export default Home;