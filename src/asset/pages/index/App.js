import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect,Switch} from 'react-router-dom'
// import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import 'styles/components.scss'
import 'styles/iconfont.css';
// import routes,
import{ Home,
  Article,
  // ArticleDetail,
  Friend,
  // FriendDetail,
  // NoFound,
  Personal
} from 'src/asset/routes'
// import Switch from 'react-router-dom/Switch';


// const RouteWithSubRoutes = ( route ) => (
//   <Route path = { route.path } exact = { route.exact } render={ props => (
//     <route.component {...props} routes = {route.routes} />
//   )}/>
// )
function NoFound(props){
  console.log(props)
  return (
    <div>
       404
    </div>
  )


}




// console.log( r );
class App extends Component {
  componentWillMount(){
    console.log( this )
  }
  getConfirmation = (message) => {
        console.log(message)
        window.confirm(message)
        // callback(allowTransition)
    }
    // const mycallback=(s)=>{
    //     console.log(s);
    // }
  render() {
    return (
      <div className="App">
        <Router basename = "index.html">
        


          <Switch>
              {/* <Redirect exact = { true} from = "/" to = "/index"></Redirect> */}
              
            
              
              

              <Route exact = { true } path = "/"  component = { Home } />
              <Route exact = { true } path = "/article"  component = { Article } />
              <Route exact = { true } path = "/friend" component = { Friend } />
              <Route exact = { true } path = "/personal" component = { Personal } />
              <Route exact = { true } path = "*" component={ NoFound } />
      
              {/* switch 匹配第一个满足条件的路由地址*/   }
              {/* <Switch>
                <Route exact = { true } path = "/index" component = { Home }></Route>
                <Route exact = { true } path = "/article/:id" component = { ArticleDetail } ></Route>
                <Route exact = { true } path = "/friend/:id" component = { FriendDetail } ></Route>
                <Route exact = { true } path = "*" component={ NoFound } />
              </Switch> */}



            
            </Switch>
        </Router>               
      </div>
    );
  }
}
// const App = () => (
//     <Switch>
//       <Route exact = { true } path = "/"  component = { Home } />
//       <Route exact = { true } path = "/article"  component = { Article } />
//       <Route exact = { true } path = "/friend" component = { Friend } />
//       <Route exact = { true } path = "/personal" component = { Personal } />
//       <Route path = "*" component = { NoFound } />
//     </Switch>
// )


export default App;
