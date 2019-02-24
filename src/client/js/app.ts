import React from 'react';
import ReactDOM from 'react-dom';

import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(Root),
    document.getElementById('root')
  );
});
