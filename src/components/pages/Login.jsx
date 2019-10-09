import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, receiveData } from '@/action';


class Login extends React.Component{
    componentWillMount(){
        const { receiveData } = this.props;
        receiveData(null, 'auth');

    }
    componentDidUpdate(){
       const {auth:nextAuth={}, history }=this.props;
       console.log("dfsdfgdg:"+JSON.stringify(this.props));
       if(nextAuth.data && nextAuth.data.uid){
           localStorage.setItem('user',JSON.stringify(nextAuth.data));
           history.push('/')
       }
    }
    handleSubmit= e =>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log('Received values of form: ', values);
                const { fetchData } = this.props;
                if(values.username ==='admin' && values.password ==='admin') fetchData({funcName: 'admin', stateName: 'auth'});      
                if(values.username==='guest' && values.password==='guest') fetchData({funcName: 'guest', stateName: 'auth'})
            }
        })

    }
    
    render(){
       const {getFieldDecorator}=this.props.form;
       return(
           <div className="login">
                <div className="login-form" >
                    <div className="login-logo">
                        <span>React Admin</span>
                    </div>
                    <Form style={{maxWidth:'300px'}} onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password',{
                                rules:[{required:true,message:'please input your password'}]
                            })(
                            <Input 
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />, 
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember',{
                                valuePropName: 'checked', initialValue: true,
                            })(<Checkbox>记住我 </Checkbox> )}
                            <a className="login-form-forgot" href="" style={{float:'right'}}>
                                忘记密码
                            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
                                登录
                            </Button>
                            Or <a href="">注册!</a>
                        </Form.Item>
                    </Form>
                </div> 
           </div>
      
       )         
   }
}
const mapStateToProps = state => {
    const { auth } = state.httpData;
    return { auth };
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));