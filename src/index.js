import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { HashRouter } from 'react-router-dom'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(<>
<HashRouter>
<App />
</HashRouter></>, document.getElementById('root'))


