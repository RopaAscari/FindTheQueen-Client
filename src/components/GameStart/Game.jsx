import React from 'react'

export default class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        
        }
    }

    componentDidMount(){
         this.Game() 
    }

     Game = () => { 
       window.location.replace("http://localhost:7621") //calling server-side clinet with the game instance
    } 

    render(){
        return(
        <div> 
          
        </div> 
      
        )
    }
}