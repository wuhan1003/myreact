import React , { Component } from 'react';
import List from '../components/list'
import Header from '../components/header';
class Article extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <div className="container">
                <Header />
                <List />
            </div>
        )
    }

}
export default Article;