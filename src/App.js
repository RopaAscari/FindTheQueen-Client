import React from 'react';
import Connection from './service/service'
import RouterApp from './router/Routes'
import history from './router/history'

let con = new Connection();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      client : 'http://127.0.0.1:7621'
    }
  }

  componentDidMount() {
    con.connect(this.state.client)
  }

  render() {
    return (
      <div>
        <h3 style={{fontSize:40,fontWeight:700}}>FIND THE QUEEN</h3>
        <RouterApp history={history}/>
      </div>
    );
  }
}

export default App;