import * as React from 'react';
import { Product } from './Models/Product';
import './Product.css';

interface ProductItemProps {
    product: Product;
}

class ProductItem extends React.Component<ProductItemProps, {}> {
    render() {

        let product = this.props.product;

        let freeMarker = product.free && (<span className='marker'>Free</span>);
        let newMarker = product.new && (<span className='marker'>New</span>);
        return <div className='li-item'>{product.name} {freeMarker} {newMarker} - {product.description} </div>;
    }
}

export {ProductItem};