import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(<>
<BrowserRouter>
<App />
</BrowserRouter></>, document.getElementById('root'))


