import React , { Component } from 'react';
import List from '../components/list'
import Header from '../components/header';
class Article extends Component {
    // constructor(props){
    //     super(props);
    // }
    componentWillMount(){
        const { match, history } = this.props;
        console.log( match );
        console.log( history )
    }
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