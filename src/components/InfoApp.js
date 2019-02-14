import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

import { List } from './List';

export class InfoApp extends Component {

  state={
    filter:"",
    users:[],
    usersMod:[],
    activePage:1
  }

  componentDidMount() {
      fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(response => this.setState((prevState) => ({
          users: response.results
        }), () => this.calcPart(1)))
  }
  
  handlePageChange = (pageNumber) => {
    this.setState({activePage: pageNumber});
    this.calcPart(pageNumber)
  }

  calcPart = (pageNumber) => {
    const startNum= (pageNumber*5)-5
    const arr=this.state.users.slice(startNum,startNum+5)
    this.setState((prevState) => ({usersMod:this.filterArr(arr)}))
  }

  onInputHandler = (event) => {
    const txt=event.target.value
    this.setState((prevState) => ({filter: txt}), () => this.calcPart(this.state.activePage))
  }

  filterArr = (arr) => {
    const filters=this.state.filter
    return arr.filter((value,index) => value.email.toLowerCase().includes(filters.toLowerCase()))
  } 

  render(){
    
    return (
      <div>
        <h1 className="header">INFO APP</h1>
        <List users={this.state.usersMod}/>
        <div className="input-wrapper"><input onChange={this.onInputHandler} placeholder={'Search'}/></div>
        <Pagination 
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={50}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          innerClass="pagination"
          itemClass="pagination__item"
          linkClass="pagination__link"
          activeLinkClass="pagination__active-link"
        />
      </div>
    )
  }
}
