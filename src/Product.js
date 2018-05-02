import React, { Component } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';


class Product extends Component {
	product = null;
	
	
	render() {
		
		return (
			<li className="p-2"><Link className="btn btn-primary w-100" to={{ pathname: "/view/"+this.props.id,  params: { product: this.props } }}>{this.props.name}</Link></li>
		)
	}
}

export default Product;