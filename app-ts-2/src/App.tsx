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
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState(prevState => ({
      ...prevState,
      newProductName: event.currentTarget.value
    }));
  }
  
  onDescriptionChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState(prevState => ({
      ...prevState,
      newProductDescription: event.currentTarget.value
    }));
  }
  
  onSubmit(event: React.FormEvent<HTMLButtonElement>): void {
    event.preventDefault();
    let newProduct: Product = {
      name: this.state.newProductName,
      description: this.state.newProductDescription
    };
    this.setState(prevState => ({
      products: [...prevState.products, newProduct],
      newProductName: '',
      newProductDescription: ''
    }));
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 2- Add and remove objects</h2>
        </div>
        <div className='add-product'>
          <form>
          <h2>Create new product</h2>
          <label>Name: </label>
            <input type='text' value={this.state.newProductName} onChange={this.onNameChange}/>
            <label> Description: </label>
            <input type='text' value={this.state.newProductDescription} onChange={this.onDescriptionChange}/>
            <button onClick={this.onSubmit}>Create</button>
          </form>
        </div>
        <div className='products-container'>
          <ProductList products={this.state.products} />
        </div>
      </div>);
  }
}

export default App;