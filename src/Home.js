import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			productsLoaded: false,
			categoriesLoaded: false,
			products: [],
			categories: [],
			productsErrors: false,
			categoriesErrors: false
		}
		this.onProductCreated = this.onProductCreated.bind(this);
		this.handleRestErrors = this.handleRestErrors.bind(this);
	}
	
	handleRestErrors(response) {
		if (response.ok) {
			return response.json();
		}
	}
	
	componentWillMount() {
		fetch('http://localhost:3001/products')
		.then(this.handleRestErrors)
		.then((data) => { this.setState({ productsLoaded: true, products: data }); })
		.catch((error) => {
			this.setState({ productsLoaded: true, productsErrors: true });
		});
		
		fetch('http://localhost:3001/categories')
		.then(this.handleRestErrors)
		.then((data) => { this.setState({ categoriesLoaded: true, categories: data }); })
		.catch((error) => {
			this.setState({ categoriesLoaded: true, categoriesErrors: true });
		});

	}
	
	onProductCreated(product) {
		let tempArray = this.state.products.slice();
		tempArray.push(product);
		this.setState({ products: tempArray });
	}
	
	
	render() {
		const { productsLoaded, categoriesLoaded, products, categories, productsErrors, categoriesErrors } = this.state;
		console.log(productsLoaded, categoriesLoaded);
		if (!productsLoaded || !categoriesLoaded) {
			return <div>Loading...</div>
		} else {
			const productList = (productsErrors === false) ? <ProductList products = { products } /> : <div className="alert alert-danger">An error occurred while loading the products.</div>
			const productForm = (categoriesErrors === false) ? <ProductForm categories = { categories } onProductCreated={ this.onProductCreated }/> : <div className="alert alert-danger">An error occurred while loading the form.</div>
			return (
				<div className="container">
					<div className="col-md-12">
						<div className="col-md-4 float-left products-container">
							{ productList }
						</div>
						<div className="col-md-8 float-left new-product-container">
							{ productForm }
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Home;
