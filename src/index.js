import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyA_6CpDuMAcBntYxX4GpWZTluQx1_dVlk8",
  authDomain: "styleshoes-2be67.firebaseapp.com",
  projectId: "styleshoes-2be67",
  storageBucket: "styleshoes-2be67.appspot.com",
  messagingSenderId: "859367687701",
  appId: "1:859367687701:web:3753b5c407a5995128701c"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

