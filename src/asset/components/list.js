import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import {List,Avatar} from 'antd'
class ListContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource : [
                {
                    title:'这个文章标题',
                    id:'1',
                    path:'/article/1',
                    img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:'这是文章描述，这是文章描述，这是文章描述，这是文章描述，这是文章描述，'
                },
                {
                    title:'这个文章标题',
                    id:'1',
                    path:'/article/2',
                    img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:'这是文章描述，这是文章描述，这是文章描述，这是文章描述，这是文章描述，'
                },
                {
                    title:'这个文章标题',
                    id:'1',
                    path:'/article/3',
                    img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:'这是文章描述，这是文章描述，这是文章描述，这是文章描述，这是文章描述，'
                }
            ]
        }
    }
    render(){
        return (
            <div className = "list-container">
                <List
                    itemLayout="horizontal"
                    size = "large"
                    split
                    dataSource={this.state.dataSource}
                    renderItem = {item=>(                        
                        <List.Item>
                           <Link to={item.path}> 
                            <List.Item.Meta
                                avatar={<Avatar src={item.img} />}
                                title={item.title}
                                description={item.description}
                                />
                             </Link> 
                        </List.Item>                          
                    )}
                />
            </div>                
            
        )
    }
}
export default ListContent ;