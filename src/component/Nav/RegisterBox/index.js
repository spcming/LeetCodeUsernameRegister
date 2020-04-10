import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
export default class RegisterBox extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            userData: [
                {
                    username: '1206710179',
                    password: 'liuming2333'
                }
            ],
            usernameIsEmpty: false,
            passwordIsEmpty: false,
            username: '',
            password: '',
            isValuable: true,
            errClass: 'noError'
        }
    }

    render() {
        return (
            <div className={this.props.className + ' ' + 'registerBoxBg'} onClick={this.props.onClick} >
                <div className={this.props.BoxClass + ' registerBox'} onClick={(e) => { e.stopPropagation() }}
                >
                    <div className={this.state.errClass}>  用户名或密码有误</div>
                    <h1 className='registerTitle'>账号密码登录</h1>

                    <input className='registerInput' type='text' placeholder='手机号/邮箱' onChange={this.getUsername}></input>
                    <div className='dataNone' style={{
                        display: this.state.usernameIsEmpty
                            ?
                            'block'
                            :
                            'none'
                    }}>请输入手机号或邮箱</div>
                    <input className='registerInput' type='password' placeholder='输入密码' onChange={this.getPassword}></input>
                    <div className='dataNone' style={{
                        display: this.state.passwordIsEmpty
                            ?
                            'block'
                            :
                            'none'
                    }}>请输入密码</div>
                    <button className='registerBtn' onClick={this.postData}>登录</button>
                </div>
            </div>
        )
    }
    postData = () => {
        this.setState({
            usernameIsEmpty: this.state.username === '',
            passwordIsEmpty: this.state.password === ''
        }, () => {
            if (!this.state.usernameIsEmpty && !this.state.passwordIsEmpty) {
                this.setState({
                    isValuable: this.state.userData.some(value => {
                        return value.password === this.state.password && value.username === this.state.username
                    })
                }, () => {
                    if (!this.state.isValuable)
                        this.dataError()
                })
            }
        })
    }
    getUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    getPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    dataError = () => {

        this.setState({
            errClass: 'errorInfo'
        }, () => {
            setTimeout(() => {
                this.setState({
                    errClass: 'noError'
                })
            }, 2000)
        })

    }
}
