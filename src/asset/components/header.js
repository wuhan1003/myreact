import React, { Component } from 'react';

import PropTypes from 'prop-types';
class Header extends Component {
    // propTypes:{
    //     leftBtn:PropTypes.string,
    //     title:PropsTypes.string,
    // }
    // defaultProps : {
    //     leftBtn : '返回',
    //     title:'首页'
    // }
    constructor(props){
        super(props);
        this.state = {

        }
    }    
    goBack(){
        let { history } = this.props.router;
        history.goBack();
    }
    componentWillMount(){
        
        console.log( this )
        console.log(this.props.localtion)
    }
    render(){
        return(
            <header className="header">
                <span 
                    className="leftBtn icon iconfont icon-back" 
                    title={this.props.leftBtn} 
                    onClick = {this.goBack.bind(this)}
                ></span>
                <span>{ this.props.title }</span>
                { this.props.rightBtn && <span title={this.props.rightBtn}>{this.props.rightBtn}</span> }
            </header>
        )
    }
}
Header.propTypes = {
    leftBtn:PropTypes.string,
    title:PropTypes.string,
} 
Header.defaultProps = {
    leftBtn : '返回',
    title:'首页'
}
export default Header;
