import React,{ Component } from 'react';
class ArticleDetial extends Component {
    // constructor(props){
    //     super(props);
    // }
    componentWillMount(){
        const { match, history } = this.props;
        console.log('articl',match)
        console.log(history);
    }
    render(){
        return (
            <div>这是文章详情页</div>
        )
    }

}
export default ArticleDetial;