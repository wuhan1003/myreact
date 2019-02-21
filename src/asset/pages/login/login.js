import React, {Component} from 'react';
import {Form, Input, Button,Icon } from 'antd';
import { connect } from 'react-redux';



import './login.scss';
import buttonGroup from 'antd/lib/button/button-group';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:this.props.count
        }
    }
    componentWillMount(){
        console.log( this.props.store );
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    changeCount(type){
        const { dispatch,change } = this.props;

        change( type )
        this.setState((preState,props)=>({
            count : props.count
        }),()=>{
            console.log(this.state.count) 
        })
        console.log( this.state.count )
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className = "form-container">
                <img style={{width:'100px',height:'100px' }} src={require('img/avart.jpg')}/>
                <p>{this.state.count}</p>
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button onClick = { this.changeCount.bind(this,'ADD')}>+</Button>
                        <Button onClick = { this.changeCount.bind(this,'REDUCE')}>-</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

}

Login = Form.create()(Login);


const mapStateToProps = (state, ownProps) => {
    console.log( ownProps )
    console.log('state',state)

    //这里将defaultState 映射到组建的props上
    return {
        count:state.count
    }
}
// //这里将dispatch 映射到组建的props上
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('dispatch', dispatch )
    return {
        change: (type) => {
            dispatch({type:type})
        }
    }
}
Login = connect(mapStateToProps,mapDispatchToProps)(Login)

export default Login;