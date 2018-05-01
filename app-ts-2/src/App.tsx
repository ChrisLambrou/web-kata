import * as React from 'react';
import { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import { Product } from './Models/Product';
import { GetData } from './data';

interface AppState {
  products: Product[];
  newProductName: string;
  newProductDescription: string;
}

class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      products: GetData(),
      newProductName: '',
      newProductDescription: ''
    };
  }
  
  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 2- Add and remove objects</h2>
        </div>
        <div className='add-product'>View to add product here...</div>
        <div className='products-container'>
          <ProductList products={this.state.products} />
        </div>
      </div>);
  }
}

export default App;