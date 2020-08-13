import React, {Component} from 'react';
import './App.css';
import logoL from './Resources/logoL.png'
import logoR from './Resources/logoR.png'

import AdminLogIn from './AppComponents/AdminLogIn';
import TicketSelection from "./AppComponents/TicketSelection";

/*
Main class of the software, it draws all the subcomponents of the page
 */
class App extends Component{

    /*
    Method for "drawing" all the subcomponents of the page
     */
  render(){
    return(
      <div className={'Background'}>
        <img src={logoL} align={'top'}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <text className={'Headers'}>Railspot</text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={logoR} align={'top'}/>
        <br/><br/>
        <TicketSelection/>
        <AdminLogIn/>
      </div>
    );
  }
}


export default App;
