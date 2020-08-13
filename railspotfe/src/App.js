import React, {Component} from 'react';
import './App.css';
import AdminLogIn from './AppComponents/AdminLogIn';
import ConsultTickets from "./AppComponents/ConsultTickets";
import RutesEdition from "./AppComponents/RutesEdition";
import StationsEdition from "./AppComponents/StationsEdition";
import TicketSelection from "./AppComponents/TicketSelection";

class App extends Component{
  render(){
    return(
      <div className={'Background'}>
        <text className={'Headers'}>Railspot</text>
          <br/><br/>
        <TicketSelection/>
        <AdminLogIn/>
        <RutesEdition/>
        <StationsEdition/>
        <ConsultTickets/>
      </div>
    );
  }
}


export default App;
