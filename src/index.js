import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/Store';
import { Provider } from 'react-redux';
import { Instagram } from 'react-content-loader';

const loading = () => <Instagram/>
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Suspense fallback={loading()}>
        <App />
      </Suspense>
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
