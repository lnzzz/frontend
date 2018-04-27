import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ProductForm from './ProductForm';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
				  <Route exact path="/" component={Home}/>
				  <Route path="/products" component={ProductList}/>
				  <Route path="/view/" component={ProductDetail} handler={ProductDetail}/>
				  <Route path="/create/" component={ProductForm} />
				</div>
			</Router>
		);
	}
}

export default App;
