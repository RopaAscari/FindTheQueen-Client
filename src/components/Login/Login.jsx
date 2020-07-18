import axios from 'axios';
import React, { Component } from 'react'
import styles from './Login.module.css'
import socketIOClient  from "socket.io-client";
const URL = 'http://localhost:7621/player/login'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username : '',
            password : '',
            check:true,
            check2:true,
            stat:0,
            connected:"Connected",
            waiting:"Waiting...",
            client : 'http://127.0.0.1:7621',
            number:3,
            greeting:'Game is starting'
        }

    }

    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    LoginCustomer = (e) =>
    {     
        e.preventDefault()
        let customer = { username: this.state.username, password: this.state.password };
        axios.post(URL,customer).then((res)=>res.data).then((status) => {
        if(status === "One User Logged" || status === "Both Users Logged"){
            console.log("User Authenticated");
            console.log(status); 
            this.setState({check:!this.state.check})
            if(status === "Both Users Logged"){
                this.send()  
            }
        } else if(status === "Incorrect Credentials") {
           alert("Access Denied");
        }
      }) 
    }

   
send = () => {
    const socket = socketIOClient(this.state.client);
    socket.emit('lobby', this.state.greeting) // change 'red' to this.state.color
  }

    render() {
        const socket = socketIOClient(this.state.client);
         socket.on('lobby', (greeting) => {
          console.log(greeting)
          this.props.history.push('GameStart')
    })
        return (
         
            <React.Fragment>
               
            <div className="">
                <br></br>
                      <center><h2>Player Status: {this.state.check?
                      this.state.waiting
                    :
                    this.state.connected
                    }</h2></center>
                <div className={styles.Login}>
                    <form onSubmit={this.handleSubmit}>
                        <br></br>
                         <center> <h1>LOGIN</h1></center>
                  
                        <label className={styles.Fieldlabel}>Username</label><br></br>
                        <input className={styles.inputadd} type="text" name="username" value={this.state.username} onChange={this.onChange} /><br></br><br></br><br></br>
                        <label className={styles.Fieldlabel}>Password</label><br></br>
                        <input className={styles.inputadd} type="text" name="password" value={this.state.password} onChange={this.onChange} ></input><br></br><br></br>
                  
                    <center><br></br><button className={styles.btn} onClick={this.LoginCustomer}>PLAY</button></center>                
                  </form>
                </div>
                <br></br><br></br><br></br>
            </div>  
            
                       
        </React.Fragment>
       )
    }
}

export default Login

