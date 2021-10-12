import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/hero';
import Products from './components/products';
import { productData } from './components/products/data';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Browse' data = {productData}/>
    </Router>
  );
}

export default App;