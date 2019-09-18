import React from 'react';
import ReactDOM from 'react-dom';
import SimpleGoldenCornApp from './App';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store} ><SimpleGoldenCornApp acorns={0} /></Provider>,
  document.getElementById('root')
);
