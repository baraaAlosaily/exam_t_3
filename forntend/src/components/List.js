import React, { Component } from 'react'
import ApiCrudData from './ApiCrudData'
import axios from 'axios'
import Form from './Form'
export class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listCrudData: [],
      showMyCrudList: false,
      message: '',
      showMessage: false,
      regionalBlocs: '',
      slug: '',
      formShow: false
    }
  }
  showForm = async (slug, regionalBlocs) => {
    this.setState({
      regionalBlocs: regionalBlocs,
      slug: slug,
      formShow: true
    })
  }
  componentDidMount = async () => {
    const request = await axios.get(`http://localhost:8080/country/list`)
    this.setState({
      listCrudData: request.data,
      showMyCrudList: true
    })
  }
  deleteItem = async (slug) => {
    await axios.delete(`http://localhost:8080/country/list/${slug}`)
    const newCrudData = this.state.listCrudData.filter(obj => obj.slug !== slug)
    this.setState({
      listCrudData: newCrudData
    })
  }
  updatdescriptionChange = (e) => this.setState({ regionalBlocs: e.target.value })
  updateItem = async (e) => {
    e.preventDefault();
    const request = await axios.put(`http://localhost:8080/country/list/${this.state.slug}`, { regionalBlocs: this.state.regionalBlocs })
    this.setState({
      listCrudData: request.data
    })
  }

  render() {
    return (
      <>
        {
          this.state.formShow &&
          <Form
            updatdescriptionChange={this.updatdescriptionChange}
            regionalBlocs={this.state.regionalBlocs}
            updateItem={this.updateItem} />
        }
        {
          this.state.showMyCrudList &&
          <ApiCrudData listCrudData={this.state.listCrudData}
            deleteItem={this.deleteItem}
            showForm={this.showForm} />
        }
      </>
    )
  }
}

export default List
