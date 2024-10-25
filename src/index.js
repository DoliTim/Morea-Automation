   // src/index.js
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';
   import App from './App';
   import { Elements } from '@stripe/react-stripe-js';
   import { loadStripe } from '@stripe/stripe-js';

   const stripePromise = loadStripe('your-publishable-key-here');

   ReactDOM.render(
     <React.StrictMode>
       <Elements stripe={stripePromise}>
         <App />
       </Elements>
     </React.StrictMode>,
     document.getElementById('root')
   );