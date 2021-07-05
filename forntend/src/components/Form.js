import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.updateItem}>
          <input onChange={this.props.updatdescriptionChange} value={this.props.regionalBlocs} type="text" />
          <input type="submit" value='Update' />
        </form>
      </div>
    )
  }
}

export default Form
