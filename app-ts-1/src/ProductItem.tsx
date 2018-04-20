import * as React from 'react';
import { Product } from './Models/Product';

interface ProductItemProps {
    product: Product;
}

class ProductItem extends React.Component<ProductItemProps, {}> {
    render() {

        let product = this.props.product;

        let freeMarker = product.free && (<span>(Free)</span>);
        let newMarker = product.new && (<span>(New)</span>);
        return <div>{product.name} - {product.description} {freeMarker} {newMarker}</div>;
    }
}

export {ProductItem};