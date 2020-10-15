import React from 'react';
import {Navbar, Nav, Button, Container, Alert} from 'react-bootstrap';

const Menu = (props) => {
    return (
        <div>
            <Navbar fixed="top" className='mb-6' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Users List</Navbar.Brand>
                    <Nav className='ml-auto'>
                        <Nav.Link className='mr-3' href="#home">Home</Nav.Link>
                    </Nav>
                    <Button className='mr-2' variant="outline-info">Members: {props.member.length}</Button>
                    <Button onClick={props.handleShowSalary} variant="outline-info">Annual Salary of all: {props.allSalary}</Button>
                </Container>
                {/* {
                    <Alert fixed='bottom' variant={props.alert.variant}>{props.alert.message}</Alert>
                } */}
            </Navbar>
            
        </div>
    );
};

export default Menu;