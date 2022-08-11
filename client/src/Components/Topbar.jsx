import React from 'react'
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,Container} from 'react-bootstrap'

const Topbar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" >
        <Container fluid>

            <h6 className='text-warning'>FREE HOME DELIVERY</h6>
            <Nav className='ms-auto'>

                <LinkContainer to='/'>
                    <Nav.Link className='text-warning'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer  to='/about'>
                    <Nav.Link className='text-warning'>About</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/contact'>
                    <Nav.Link className='text-warning'>Contact</Nav.Link>
                </LinkContainer>


            </Nav>

        </Container>
    </Navbar>
      
    </>
  )
}

export default Topbar
