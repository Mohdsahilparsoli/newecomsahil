import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Appprovider } from './context/Appprovider';
import { FilterProvide } from './context/FilterProvide';
import Cart from './Cart';
import { Cartconetxt } from './context/Cartconetxt';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Appprovider>
      <FilterProvide>
        <Cartconetxt>
        <App />
        </Cartconetxt>
      
      </FilterProvide>
    </Appprovider>
  </React.StrictMode>
);
