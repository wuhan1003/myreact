import React , { Component } from 'react';
import List from '@/list'
import Header from '@/header';
class Article extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    componentWillMount(){
        console.log( this.props )
    }
    render(){
        return (
            <div className="container">
                <Header router = { this.props }  />
                <List />
            </div>
        )
    }

}
export default Article;