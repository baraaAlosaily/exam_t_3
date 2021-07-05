import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class ApiData extends Component {
  render() {
    return (
      this.props.listApiData.map((obj, idx) => {
        return (
          <div key={idx}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={obj.flag} />
              <Card.Body>
                <Card.Title>{obj.name}</Card.Title>
                <Card.Text>
                  {obj.capital}
                </Card.Text>
                <Card.Text>
                  {obj.regionalBlocs}
                </Card.Text>
                <Button onClick={e => this.props.addToList(obj)} variant="primary">Add To List</Button>
              </Card.Body>
            </Card>

          </div>
        )
      })
    )
  }
}

export default ApiData
