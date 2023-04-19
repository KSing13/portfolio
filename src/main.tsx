import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App idActive="home">Main</App>
    </React.StrictMode>,
)
