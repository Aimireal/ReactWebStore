import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/hero';
import Products from './components/products';
import { productData, productDataTwo } from './components/products/data';
import Feature from './components/feature';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Browse' data = {productData}/>
      <Feature/>
      <Products heading='More we think you may like' data = {productDataTwo}/>
    </Router>
  );
}

export default App;