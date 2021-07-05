import axios from 'axios'
import React, { Component } from 'react'
import ApiData from './ApiData'
export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listApiData: [],
      showMyList: false,
      message: '',
      showMessage: false
    }
  }
  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/country`)
    this.setState({
      listApiData: request.data,
      showMyList: true
    })
  }
  addToList = async (objData) => {
    const posReq = await axios.post(`http://localhost:8080/country/list`, objData)
    this.setState({
      message: posReq.data,
      showMessage: true
    })
  }
  render() {
    return (
      <>
        {
          this.state.showMyList &&
          <ApiData listApiData={this.state.listApiData}
            addToList={this.addToList} />
        }
      </>
    )
  }
}

export default Home
