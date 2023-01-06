import {lazy, Suspense} from "react";

const Navbar = lazy(() => import('../components/Navbar'));
const Introduction = lazy(() => import('../components/Introduction'));
const Experience = lazy(() => import('../components/Experience'));
const About = lazy(() => import('../components/About'));
const Works = lazy(() => import('../components/Works'));
const Footer = lazy(() => import('../components/Footer'));

function Home() {
    return (
        <div className={"app"}>
            <Suspense fallback={<div className="loader-container">
                Loading...
            </div>}>
                <Navbar />
                <Introduction />
                <About />
                <Experience />
                <Works />
                <Footer />
            </Suspense>
        </div>
    )
}

export default Home;