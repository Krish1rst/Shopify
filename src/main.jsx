import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './Context/ContextApi';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ContextProvider>
    <App />
    <ToastContainer  position="top-center" autoClose={3000}  />
</ContextProvider>
    

);

