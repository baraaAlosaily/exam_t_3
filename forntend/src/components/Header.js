import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
export class Header extends Component {
  render() {
    return (
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/list">list</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}

export default Header
