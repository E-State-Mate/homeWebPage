import React, { Component, Suspense, useState, useEffect } from 'react';

// Commented out unneeded components
const NavbarPage = React.lazy(() => import('../../components/Navbar/Navbar_Page'));
const Section = React.lazy(() => import('./section'));
const About = React.lazy(() => import('../../components/About/about'));
const Process = React.lazy(() => import('../../components/Process/process'));
// const Portfolio = React.lazy(() => import('../../components/Portfolio/portfolio'));
// const Counter = React.lazy(() => import('../../components/Counter/counter'));
const OurTeam = React.lazy(() => import('../../components/Team/our-team'));
const Footer = React.lazy(() => import('../../components/Footer/footer'));
// const Testimonials = React.lazy(() => import('../../components/Testimonials/testimonials'));
// const Pricing = React.lazy(() => import('../../components/Pricing/pricing'));
// const Blog = React.lazy(() => import('../../components/Blog/blog'));
const CTA = React.lazy(() => import('../../components/CTA/CTA'));
const GetInTouch = React.lazy(() => import('../../components/GetInTouch/GetInTouch'));

const navItems = [
    { id: 1 , idnm : "home", navheading: "Home" },
    { id: 2 , idnm : "about", navheading: "About" },
    // { id: 3 , idnm : "portfolio", navheading: "Portfolio" },
    { id: 4 , idnm : "team", navheading: "Team" },
    // { id: 5 , idnm : "testimonial", navheading: "Testimonial" },
    // { id: 6 , idnm : "pricing", navheading: "Pricing" },
    // { id: 7 , idnm : "blog", navheading: "Blog" },
    { id: 8 , idnm : "contact", navheading: "Contact" }, 
    // *** Need to add a link for "Get a Quote Now"
]

const Index2 = () => {

    const [imglight, setImglight] = useState(true);
    const [navClass, setNavClass] = useState("");
    const [pos, setPos] = useState(document.documentElement.scrollTop);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    }, [])

    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", this.scrollNavigation, true);
        }
      }, []);

    const scrollNavigation = () => {
        const scrollUp = document.documentElement.scrollTop;
        if(scrollUp > pos){
            setNavClass('nav-sticky');
            setImglight(false);
        } else {
            setNavClass('');
            setImglight(true);
        }
    }

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
                <NavbarPage navItems={navItems} navClass={navClass} imglight={imglight} />
                <Section/>
                <About/>
                <Process/>
                {/* <Portfolio/> */}
                {/* <Counter/> */}
                <OurTeam/>
                {/* <Testimonials/> */}
                {/* <Pricing/> */}
                {/* <Blog/> */}
                <CTA/>
                <GetInTouch/>
                <Footer/>
            </Suspense>
        </React.Fragment>
    )
}

export default Index2;