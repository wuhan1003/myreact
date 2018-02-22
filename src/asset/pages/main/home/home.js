import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/header';
import ListContent from '../components/list';
// import { Tabs } from 'antd';
// const TabPane = Tabs.TabPane;
import Tabs from '../components/tabs';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className = "container">
                <div className="text"></div>
                {/* <Tabs defaultActiveKey = "1">
                    <TabPane
                        tab = {
                            <p>
                                <i className = "icon iconfont icon-viewlist"></i>
                                <span>文章列表</span>
                            </p>
                        }
                        key = "1"
                    >文章列表</TabPane>
                    <TabPane
                       tab = {
                            <p>
                                <i className = "icon iconfont icon-atm"></i>
                                <span>文章列表</span>
                            </p>
                        }
                        key = "2"
                    >好友</TabPane>
                    <TabPane
                        tab = {
                            <p>
                                <i className = "icon iconfont icon-account"></i>
                                <span>文章列表</span>
                            </p>
                        }
                        key = "3"
                    >个人中心</TabPane>
                </Tabs> */}
{/*             
                <Tabs>
                    <Tabs.Title key = "title">
                        <p>
                            <i className = "icon iconfont icon-viewlist"></i>
                            <span>文章列表</span>
                        </p>
                        <p>
                            <i className = "icon iconfont icon-atm"></i>
                            <span>好友列表</span>
                        </p>
                        <p>
                            <i className = "icon iconfont icon-account"></i>
                            <span>个人中心</span>
                        </p>
                    </Tabs.Title>    
                    <Tabs.Content key = "content">
                        <section>
                            <Header />    
                            <ListContent />
                        </section>
                        <section>
                            这是好友内容
                        </section>
                        <section>
                            这是个人中心
                        </section>
                    </Tabs.Content>
                </Tabs> */}


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