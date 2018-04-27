import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class ProductDetail extends Component {
	constructor() {
		super();
		this.state = {
			isLoaded: false,
			error: null,
			product: []
		}
	}
	
	componentDidMount() {
		if (this.props.location.params !== undefined) {
			this.setState({ isLoaded: true, error: null, product: this.props.location.params.product })
		} else {
			let id = this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length-1];
			fetch('http://localhost:3001/list-products/'+id)
			.then((response) => { return response.json(); })
			.then((data) => {
				if (data.length > 0) {
					this.setState({ isLoaded: true, error: null, product: data[0] });
				} else {
					this.setState({ isLoaded: true, error: "Product doesnt exist", product: null });
				}
			}, (error) => {
				this.setState({ isLoaded : true, error: error, product: null });
			});
		}
	}
	
	
	render() {
		const { error, isLoaded, product } = this.state;
		if (error && isLoaded === true) {
			return (<Redirect to="/" /> );
		} else {
			return (
				<div className="product-visor container">
					<h1 className="title">{ product.name }</h1>
					<div>Price: { product.price }</div>
					<div>Brand: { product.brand }</div>
					<div>List Price: {product.list_price}</div>
					<Link className="btn btn-primary" to={{ pathname: "/" }}>Back</Link>
				</div>
			)
		}
	}
}

export default ProductDetail;