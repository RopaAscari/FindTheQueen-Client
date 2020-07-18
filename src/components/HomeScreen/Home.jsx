import React  from 'react'
import styles from './Home.module.css'

export default class Home extends React.Component{
    constructor(props){
        super(props)
            this.state = {

            }
    }
    Login = () =>{
        this.props.history.push("Login")
    }


    render(){
        return(
            <div className={styles.container}>
                <button onClick={this.Login} className={styles.btn5}>New Game</button>
                <button className={styles.btn5}>Options</button>
                <button className={styles.btn5}>Exit</button>
            </div>
        )
    }
}