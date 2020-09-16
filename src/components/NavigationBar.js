import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <NavbarBrand href="/">Home Monitor</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/about">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/weather">Weather</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/add">Add Device</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/feed">Live Feed</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
