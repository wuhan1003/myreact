import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './asset/styles/components.scss'
import './asset/styles/iconfont.css';
import routes,{ Home,Article,ArticleDetail,Friend,FriendDetail} from './asset/routes'


// const RouteWithSubRoutes = ( route ) => (
//   <Route path = { route.path } exact = { route.exact } render={ props => (
//     <route.component {...props} routes = {route.routes} />
//   )}/>
// )

// console.log( r );
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          


          <div className="body">
              <Route path = "/" component = { Home }></Route>
              <Route exact = { true} path = "/article" component = { Article } ></Route>
              <Route exact = { true} path = "/article/:id" component = { ArticleDetail } ></Route>
              <Route exact = { true} path = "/friend" component = { Friend } ></Route>
              <Route exact = { true} path = "/friend/:id" component = { FriendDetail } ></Route>
            {
              // routes.map((route,i)=>{
              //   return <RouteWithSubRoutes key = {i} { ...route } />
              // })
              





            }
          </div>
        </Router>               
      </div>
    );
  }
}

export default App;
