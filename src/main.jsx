import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextApi } from './Context/ContextApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ContextApi>
    <App />
</ContextApi>
    

);

