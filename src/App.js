import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'reactstrap'
import Header from './components/Header'
import CameraList from './components/CameraList';
import ShoppingCart from './components/ShoppigCart';

class App extends Component {
  state = {
    cameras: [],
    filter: {
      category: 1,
      name: ""
    }
  }

    async componentDidMount() {
    const res = await fetch('http://localhost:8082/api/cameras')
    const json = await res.json()
    this.setState({cameras: json})
  }

    _filterName = (name) => {
      this.setState((currentState) => {
        let newFilter = currentState.filter
        newFilter.name = name
        return {
          filter: newFilter
        }
      })
    }

      _category = (num) => {
    this.setState((currentState)=> {
    let newFilter = currentState.filter 
    newFilter.category = num
      return {filter : newFilter} 
    })
  }

  _addToCart = (id) => {
    this.setState(({cameras})=> {
      let newCartList = cameras.map((camera) => {
        if(camera.id === id){ 
          return {...camera, inCart : true}
        }
        return camera
      })
      return {cameras : newCartList}
    })
  }

    _removeItem = (id) => {
    this.setState(({cameras})=> {
      let newCartList = cameras.map((camera) => {
        if(camera.id === id){ 
          return {...camera, inCart : false}
        }
        return camera
      })
      return {cameras : newCartList}
    })
  }


  render() {
    const {cameras, filter} = this.state
    let newList = cameras
    if (filter.category === 2) {
      let saleList = cameras.filter(camera => camera.onSale)
      newList = saleList.filter(camera => camera.name.toLowerCase().startsWith(filter.name.toLowerCase()))
    } else {  
      newList = cameras.filter(camera => camera.name.toLowerCase().startsWith(filter.name.toLowerCase()))
    }
    let newCartList = cameras.filter(camera => camera.inCart)

    return (
      <Container>
        <Header _category={this._category} _filterName={this._filterName}/>
          <Row className="mt-3">
          <Col className="col-6">
          <CameraList cameras={newList} _addToCart={this._addToCart}/>
          </Col>
          <Col className="col-6">
          <ShoppingCart cartList={newCartList} _removeItem={this._removeItem}/>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;
