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
    constructor(props){
        super(props);
        this.state={}
    }


    componentWillMount(){
       console.log( this.props.rootReducers)
    }
    render(){
        return (
            <Switch>
            <Route exact path = '/' component = { Login } />
            {/* <Redirect exact = { true } from = "/" to = "/login" /> */}
            <Route  path = "/register" component = { Register } />
            {/* <Route path ="*" component = { Nofound }/> */}



            
            </Switch>
        )
    }
}

export default App;






