import React from 'react';
// import ReactDOM from 'react-dom/client';
import App from './components/App';

// react 17
import { render } from 'react-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

// react 17
const rootElement = document.getElementById('root');
render(
    <App />,
    rootElement
);