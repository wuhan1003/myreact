import React from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter as Router} from 'react-router-dom'


import App from './App';
import registerServiceWorker from 'src/registerServiceWorker';
// const getConfirmation = (message) => {
//     console.log(0)
//      window.confirm(message)
//     // callback(allowTransition)
// }
// const mycallback=(s)=>{
//     console.log(s);
// }

ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
