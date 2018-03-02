import React,{ Component } from 'react';
import PropTypes from 'prop-types';
class Input extends Component {
    constructor(props){
        this.state = {}
    }
    render(){
        return(
            <div className = "input" >
                <input { ...this.props } />
                <span>{ this.props.msg }</span>
            </div>
        )
    }
}
Input.defaultPros = {
    type:'text',
    valut:'',
    name:'',
    placeholder:''
}
export default Input;