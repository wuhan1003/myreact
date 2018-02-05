import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/header';
import ListContent from '../components/list';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className = "container">
                <Header />    
                <ListContent />            
                <footer className = "footer">
                    <NavLink to = "/article"><i className = "icon iconfont icon-viewlist"></i><span> 文章列表 </span></NavLink>
                    <NavLink to = "/friend"><i className = "icon iconfont icon-atm"></i><span>好友</span></NavLink>
                    <NavLink to = "/personal"><i className="icon iconfont icon-account"></i><span>个人中心</span></NavLink>
                </footer>
            </div>                
            
        )
    }
}

// const Home = () => {
//     return (
//         <div>
//             <Header />
//             <div className = "list-container">
//                 <ul>
//                     <li><Link to = "/article"> 文章列表页 </Link></li>
//                     <li><Link to = "/friend"> 好友 </Link></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }



export default Home;