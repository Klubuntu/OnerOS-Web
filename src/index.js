import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

fetch('index.html')
  .then(response => response.text())
  .then(html => {
    const container = document.createElement('div');
    container.innerHTML = html;
    const root = container.querySelector('#root');
    ReactDOM.render(<App />, root);
  });