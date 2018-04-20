import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { GetData } from './data';
import { Product } from './Models/Product';
import { ProductList } from './ProductList';

class App extends Component {

    render(): JSX.Element {
        const data: Product[] = GetData();
        // const listItems = data.map((d) =>
        //     <li key={d.name}>{d.name} {d.description}</li>
        // );
        return (
            <div className='App'>

                <div className='App-header'>
                    <h2>Welcome Introduction to <code>web-kata#1-Typescript</code></h2>
                </div>
                <div className='products'>
                    <ProductList products={data} />
                </div>
            </div>);
    }
}

export default App;