import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MainHeader } from './header';
import { Provider } from 'react-redux';
import store from './store/store';

import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css"; 
import App2 from './App copy';

const root = ReactDOM.createRoot(document.getElementById('root'));

 /* 
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <MainHeader/>  
     <App />
    </Provider>
  </React.StrictMode>
);

*/

root.render(
  <React.StrictMode>
    
    <Provider store={store}> 
     <App2 />
    </Provider>
  </React.StrictMode>
);