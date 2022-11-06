import React from 'react'
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar} from 'react-bootstrap'

class Navigation extends Component {
    render (){
        return(
            <div>
                <Navbar bg="dark" variant = "dark" sticky="top" expand = "md" collapseOnSelect>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="business-pitch">Business Pitch</Nav.Link>
                            <Nav.Link href="marketing-strategy">Marketing strategy</Nav.Link>
                            <Nav.Link href="product-description">Product Description</Nav.Link>
                            <Nav.Link href="cold-emails">Cold Emails</Nav.Link>
                            <Nav.Link href="insta-caption">Insta Captions</Nav.Link>
                            <Nav.Link href="blogs">Blogs</Nav.Link>
                            <Nav.Link href="intro">Intro</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation