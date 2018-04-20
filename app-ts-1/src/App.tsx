import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { GetData } from './data';
import { Product } from './Models/Product';

class App extends Component {

    render(): JSX.Element {
        const data: Product[] = GetData();
        const listItems = data.map((d) =>
            <li key={d.name}>{d.name} {d.description}</li>
        );
        return (
            <div className='App'>

                <div className='App-header'>
                    <h2>Welcome Introduction to <code>web-kata#1-Typescript</code></h2>
                </div>
                <p className='App-intro'>
                    To get started change this text and then save to reload.
                </p>
                <div className='products'>
                    ... your code here
                    <ul>{listItems}</ul>
                </div>
            </div>);
    }
}

export default App;