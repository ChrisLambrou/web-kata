import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';

interface ProductListProps {
    products: Product[];
}

interface ProductItemProps {
    product: Product;
}

class ProductItem extends Component<ProductItemProps> {
    render(): JSX.Element {
        return (
            <div>{this.props.product.name} 
            {this.props.product.free ? ' (free)' : null}
            {this.props.product.new ? ' (new)' : null}
            </div>
        );
    }
}

export default class ProductList extends Component<ProductListProps> {
    render(): JSX.Element {
        return (
            <div className='products'>
                {this.props.products.map((product, i) => <ProductItem key={i} product={product} />)}
            </div>
        );
    }
}