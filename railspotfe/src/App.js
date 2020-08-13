import React, {Component} from 'react';
import './App.css';
import AdminLogIn from './AppComponents/AdminLogIn';
import TicketSelection from "./AppComponents/TicketSelection";

class App extends Component{
  render(){
    return(
      <div className={'Background'}>
        <text className={'Headers'}>Railspot</text>
          <br/><br/>
        <TicketSelection/>
        <AdminLogIn/>
      </div>
    );
  }
}


export default App;
