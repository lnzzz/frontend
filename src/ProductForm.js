import React, { Component } from 'react';

class ProductForm extends Component {
	constructor(props) {
		super(props);
		this.state = this.getInitialState();
		this.state.category_id = parseInt(props.categories[0].id);
		this.state.categories = props.categories;
		this.handleChange = this.handleChange.bind(this);
		this.handleIntChange = this.handleIntChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRestErrors = this.handleRestErrors.bind(this);
		this.getInitialState = this.getInitialState.bind(this);
	}
	
	getInitialState() {
		return {
			name: '',
			price: '',
			list_price: '',
			brand: '',
			virtual: false,
			creationStatus: '',
			statusMessage: ''
		};
	}
	
	resetForm() {
		this.setState(this.getInitialState());
	}
	
	handleChange(event) {
		this.setState({
			[event.target.name] : event.target.value
		});
	}
	
	handleIntChange(event) {
		this.setState({
			[event.target.name] : parseInt(event.target.value)
		});
	}
	
	handleRestErrors(response) {
		if (response.ok) {
			return response.json();
		} else {
			this.setState({ creationStatus: "danger", statusMessage: "There has been an error creating the product." });
			throw Error(response.statusText);
		}
	}
	
	handleSubmit() {
		fetch('http://localhost:3001/product', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.name,
				price: this.state.price,
				list_price: this.state.list_price,
				brand: this.state.brand,
				category_id: this.state.category_id,
				virtual: this.state.virtual,
			})
		})
		.then(this.handleRestErrors)
		.then((data) => {
				this.props.onProductCreated(data);
				this.resetForm();
				this.setState({ creationStatus: "success", statusMessage: "Product has been created successfully."	});
		})
		.catch(error => console.log(error));
	}
	
	render() {
		return (
			<div className="new-product container">
				<h1 className="title">New Product</h1>
				<form className="form">
					<div className="form-group">
						<label htmlFor="name">Name: </label>
						<input type="text" className="form-control" id="name" name="name" onChange={this.handleChange} value={this.state.name}/>
					</div>
					<div className="form-group">
						<label htmlFor="price">Price: </label>
						<input type="number" className="form-control" id="price" name="price" onChange={this.handleIntChange} value={this.state.price}/>
					</div>
					<div className="form-group">
						<label htmlFor="list_price">List price: </label>
						<input type="number" className="form-control" id="list_price" name="list_price" onChange={this.handleIntChange} value={this.state.list_price}/>
					</div>
					<div className="form-group">
						<label htmlFor="brand">Brand: </label>
						<input type="text" className="form-control" id="brand" name="brand" onChange={this.handleChange} value={this.state.brand}/>
					</div>
					<div className="form-group">
						<label htmlFor="category_selector">Category: </label>
						<select className="form-control" name="category_id" onChange={this.handleIntChange}>
							{	
								this.props.categories.map(category => {
									return (<option key={category.id} value={category.id}>{category.name}</option>);
								})
							}
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="virtual">Is Virtual: </label>
						<select className="form-control" name="virtual" onChange={this.handleChange}>
							<option value="0">No</option>
							<option value="1">Yes</option>
						</select>
					</div>
					<div className="form-group">
						<div className={ 'float-left alert status_message alert-'+this.state.creationStatus }>	{ this.state.statusMessage } </div>
						<input type="button" className="float-right btn btn-primary" value="Create Product" onClick={ this.handleSubmit } /> 
					</div>
				</form>
				
				
			</div>
		)
	}
}

export default ProductForm;