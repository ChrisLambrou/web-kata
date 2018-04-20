import * as React from 'react';
import { Product } from './Models/Product';

interface ProductItemProps {
    product: Product;
}

class ProductItem extends React.Component<ProductItemProps, {}> {
    render() {
        return <div>{this.props.product.name} - {this.props.product.description}</div>;
    }
}

export {ProductItem};