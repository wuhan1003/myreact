import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
class List extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div>
                <ul>
                    <li><Link to = "article/1">跳转到文章详情1</Link></li>
                    <li><Link to = "friend/1">跳转到好友详情1</Link></li>
                </ul>
            </div>
        )
    }
}
export default List ;