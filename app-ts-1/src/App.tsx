import * as React from 'react';
import { Component } from 'react';
import './App.css';
import data from './data';
import ProductList from './ProductList';

class App extends Component {
  render(): JSX.Element {
    const products = data.GetData();
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome Introduction to <code>web-kata#1-Typescript</code></h2>
        </div>
        <p className='App-intro'>
          To get started change this text and then save to reload.
        </p>
        <ProductList products={products} />
      </div>);
  }
}

export default App;