import React, { Component } from 'react';
import './ProductList.css';
import Product from './Product';


class ProductList extends Component {
  render () {
	
    return (
		<div className="container">
			<h1>Products List</h1>
			<ul className="product-list m-0 p-0">
			  {this.props.products.map(product => {
				return (
				  <Product
					key={product._id}
					id={product._id}
					name={product.name}
					price={product.price}
					list_price={product.list_price}
					brand={product.brand}
					category_id={product.category_id}
					virtual={product.virtual}
				  />
				);
			  })}
			</ul>
			
		</div>
    );
  }
}

export default ProductList;