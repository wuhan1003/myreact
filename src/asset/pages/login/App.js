import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import Login from './login';
import Register from './register';
import 'antd/dist/antd.css';
import 'styles/components.scss'
import 'styles/iconfont.css';
function Nofound(props){
    return <p>404</p>
};
class App extends Component {
    componentWillMount(){
       
    }
    render(){
        return (
            <Switch>
            <Route component = { Login } />
            {/* <Redirect exact = { true } from = "/" to = "/login" /> */}
            <Route exact = { true } path = "/register" component = { Register } />
            {/* <Route path ="*" component = { Nofound }/> */}



            
            </Switch>
        )
    }
}

export default App;






