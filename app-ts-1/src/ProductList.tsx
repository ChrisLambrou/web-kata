import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';
import { ProductItem } from './ProductItem';

interface ProductListProps {
    products: Product[];
}

class ProductList extends Component<ProductListProps, {}> {
    render() {
        const listItems = this.props.products.map((d) => (
            <li key={d.name}>
            <ProductItem product={d} />
        </li>)
        );
        return (<ul>{listItems}</ul>);
    }
}

export {ProductList};