import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (                
            <footer className = "footer">
                <NavLink to = "/article"><i></i><span> 文章列表页 </span></NavLink>
                <NavLink to = "/friend"><i></i><span>好友</span></NavLink>
            </footer>
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