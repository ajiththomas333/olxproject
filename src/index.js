import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter as  Router} from 'react-router-dom';
import {FirebaseContext} from './store/Context';
import Context from './store/Context';


import Firebase  from './Firebase/Config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{Firebase}}>
    <Context>
    <Router>
    <App />
    </Router>
    </Context>
    
    </FirebaseContext.Provider>
  </React.StrictMode>
);
