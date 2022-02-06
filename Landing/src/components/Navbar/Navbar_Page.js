import React, { Component, useState } from 'react';
import { 
    Navbar,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Container,
    Collapse
} from "reactstrap";
import {Link} from 'react-router-dom'
import ScrollspyNav from "./scrollSpy";

//Import Images
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

const NavbarPage = ({navItems, navClass, imglight}) => {

    let targetId = navItems.map((item) => {
        return(
            item.idnm
        )
    });

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggle = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return(
        <React.Fragment>
            <Navbar expand="lg" fixed="top" className={"navbar-custom sticky sticky-dark " + navClass}>
                <Container>
                    <Link to='/ '>
                        <NavbarBrand className="logo text-uppercase" >
                            {
                                imglight === true ?
                                    <h1 style={{fontSize: '1rem', color: '#e4cd05'}}>E-State Mate Services</h1>
                                :   <h1 style={{fontSize: '1rem', color: 'black'}}>E-State Mate Services</h1>
                            }
                        </NavbarBrand> 
                    </Link>                       
                    <NavbarToggler onClick={toggle} ><i className="mdi mdi-menu"></i></NavbarToggler>
                    <Collapse id="navbarCollapse" isOpen={isOpenMenu} navbar>
                    <ScrollspyNav
                        scrollTargetIds={targetId}
                        scrollDuration="800"
                        headerBackground="true"
                        activeNavClass="active"
                        className="navbar-collapse"
                    >
                    <Nav navbar className="ml-auto navbar-center" id="mySidenav">
                        {navItems.map((item, key) => (
                            <NavItem key={key}>
                                <NavLink href={"#" + item.idnm} className={item.navheading === "Home" ? "active" : "" } > {item.navheading}</NavLink>
                            </NavItem>
                        ))} 
                    </Nav>
                </ScrollspyNav>
                </Collapse>
            </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default NavbarPage;