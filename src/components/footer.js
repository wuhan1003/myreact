import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
class Footer extends Component {    
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentWillMount(){
        const { path } = this.props.router.match;

        if(path === "/" || path === "/article"){

        }
        

    }
    render(){
        return (
            <footer className = "footer">
                <NavLink to = "/" activeClassName = "active"><i className = "icon iconfont icon-viewlist"></i><span> 文章列表 </span></NavLink>
                <NavLink to = "/friend"><i className = "icon iconfont icon-atm"></i><span>好友</span></NavLink>
                <NavLink to = "/personal"><i className="icon iconfont icon-account"></i><span>个人中心</span></NavLink>
            </footer>
        )
    }
}     
export default Footer;


