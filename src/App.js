import React from 'react';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort:"",
    }
  }
  render() {
    return (
      <div className='grid-container'>
        <header>
          <a href='/'>Wamazona</a>
        </header>
        <main>
          Product List
      </main>
        <footer>
          All rights reserved.
      </footer>
      </div>
    );
  }
}

export default App;
