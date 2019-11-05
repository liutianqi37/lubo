import React, { Component } from 'react'
import styles from './Login.css';
import axios from 'axios'
import {NavLink} from 'react-router-dom'

class Login extends Component {
    state={
        UserName:"",
        PassWord:""
    };
    render() {
        let {UserName,PassWord} = this.state;
            return (
            <div className={styles.wrap}>
                <main>
                    <div className={styles.ltitle}>欢迎来到沐恩之家</div>
                    <input value={UserName} onChange={this.changUserName.bind(this)} className={styles.luser} type="text" placeholder="请输入用户名"></input>
                    <br/>
                    <input value={PassWord} onChange={this.changPassWord.bind(this)} className={styles.lpassword} type="text" placeholder="请输入密码"></input>

                    <NavLink to="/registration"> <div className={styles.lregistered} >立即注册</div></NavLink>
                    <div className={styles.lforget}>忘记密码</div>
                    <br/>
                    <button className={styles.lbtn} onClick={this.handClick.bind(this)}>登陆</button>
                    <br/>
                    <div className={styles.chat}>微信
                        <img src="../../../public/img/chat.png" className={styles.chatimg}></img>
                    </div>
                    <br/>
                    <div className={styles.git}>
                        <img src="../../../public/img/git.png" className={styles.chatimg}></img>
                        <a href='https://github.com/login/oauth/authorize?client_id=f15fcbb3c8f5401311db&redirect_uri=http://localhost:8000/oauth/redirect'>gitHub</a>
                    </div>

                </main>
            </div>
        )
    }
    changUserName(e){
        this.setState({
            UserName:e.target.value
        })
    }
    changPassWord(e){
        this.setState({
            PassWord:e.target.value
        })
    }
    handClick(){
        let {UserName,PassWord} = this.state;
            if(UserName!=="" && PassWord!==""){
                axios.post("/api/getlogin",{
                    UserName,
                    PassWord
            }).then(res=>{
                if(res.data.code === 1){
                    this.props.history.push("/IndexPage")
                    window.sessionStorage.setItem('userId',res.data.userId)
                }else{
                    alert('登陆失败，请您先注册~')
                }
            })
        }
    }
}


export default Login

