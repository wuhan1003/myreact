import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router} from 'react-router-dom'


import App from './App';
import registerServiceWorker from 'src/registerServiceWorker';
ReactDOM.render(
<Router basename="index.html">
<App/>
</Router>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
