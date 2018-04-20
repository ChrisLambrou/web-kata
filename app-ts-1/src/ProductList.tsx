import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';
import './ProductList.css';

interface ProductItemProps {
    product: Product;
}

class ProductItem extends Component<ProductItemProps, {}> {
    render(): JSX.Element {
        const product = this.props.product;
        return (
            <li key={product.name}>
                {product.name}{product.free && ' (this is free!)'}{product.new && ' (this is new!)'}
            </li>
        );
    }
}

interface ProductListProps {
    products: Product[];
}
  
class ProductList extends Component<ProductListProps, {}> {
    render(): JSX.Element {
        return (
            <ul className='productList'>
                {this.props.products.map(product => <ProductItem key={product.name} product={product} />)}
            </ul>
        );
    }
}

export { ProductList };