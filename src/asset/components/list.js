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
                    img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:'这是文章描述，这是文章描述，这是文章描述，这是文章描述，这是文章描述，'
                },
                {
                    title:'这个文章标题',
                    id:'1',
                    img:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    description:'这是文章描述，这是文章描述，这是文章描述，这是文章描述，这是文章描述，'
                },
                {
                    title:'这个文章标题',
                    id:'1',
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
                    dataSource={this.state.dataSource}
                    renderItem = {item=>(
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={item.img} />}
                                title={<h3>{item.title}</h3>}
                                description={item.description}
                                />
                        </List.Item>
                    )}
                
                />
            </div>                
            
        )
    }
}
export default ListContent ;