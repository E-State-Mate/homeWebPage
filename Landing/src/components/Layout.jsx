import React, {useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavbarPage from './Navbar/Navbar_Page';
import Footer from './Footer/footer.js'

const Layout = ({navItems, navClass, imglight}) => {

    const location = useLocation();

    useEffect(() => {

    }, [location.pathname])

    return (
        <div style={{width: '100%'}}>
            <NavbarPage navItems={navItems} navClass={navClass} imglight={imglight}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
