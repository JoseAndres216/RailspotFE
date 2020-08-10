import React, {Component} from 'react';
import './App.css';
import AdminLogIn from './AppComponents/AdminLogIn';
import ConsultTickets from "./AppComponents/ConsultTickets";
import RutesEdition from "./AppComponents/RutesEdition";
import StationsEdition from "./AppComponents/StationsEdition";
import TicketBill from "./AppComponents/TicketBill";
import TicketInformation from "./AppComponents/TicketInformation";
import TicketSelection from "./AppComponents/TicketSelection";

class App extends Component{
  render(){
    return(
      <div className={'Background'}>
        <text className={'Headers'}>Railspot</text>
        <TicketSelection/>
        <TicketInformation/>
        <TicketBill/>
        <AdminLogIn/>
        <RutesEdition/>
        <StationsEdition/>
        <ConsultTickets/>
      </div>
    );
  }
}


export default App;
