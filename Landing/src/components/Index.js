
import React, { Suspense } from 'react';

// Commented out unneeded components
const Section = React.lazy(() => import('./section'));
const About = React.lazy(() => import('./About/about'));
const Process = React.lazy(() => import('./Process/process'));
// const Portfolio = React.lazy(() => import('../../components/Portfolio/portfolio'));
// const Counter = React.lazy(() => import('../../components/Counter/counter'));
const OurTeam = React.lazy(() => import('./Team/our-team'));
const Footer = React.lazy(() => import('./Footer/footer'));
// const Testimonials = React.lazy(() => import('../../components/Testimonials/testimonials'));
// const Pricing = React.lazy(() => import('../../components/Pricing/pricing'));
// const Blog = React.lazy(() => import('../../components/Blog/blog'));
const CallToAction = React.lazy(() => import('./CallToAction/CallToAction'));
const GetInTouch = React.lazy(() => import('./GetInTouch/GetInTouch'));



const Index = () => {

    const Loader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">Loading...</div>
                </div>
            </div>
        );
    }
    
    return(
        <React.Fragment>
            <Suspense fallback = {Loader()} >
                <Section/>
                <About/>
                <Process/>
                {/* <Portfolio/> */}
                {/* <Counter/> */}
                <OurTeam/>
                {/* <Testimonials/> */}
                {/* <Pricing/> */}
                {/* <Blog/> */}
                <CallToAction/>
                <GetInTouch/>
            </Suspense>
        </React.Fragment>
    )
}

export default Index;