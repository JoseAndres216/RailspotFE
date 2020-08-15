import React, {Component} from 'react';
import './App.css';
import logoL from './Resources/logoL.png'
import logoR from './Resources/logoR.png'
import Rutes from './Resources/Rutes.png'

import AdminLogIn from './AppComponents/AdminLogIn';
import TicketSelection from "./AppComponents/TicketSelection";
import Divider from "@material-ui/core/Divider";

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
        <img src={logoL} align={'top'} alt={logoL}/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <text className={'Headers'}>Railspot</text>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={logoR} align={'top'} alt={logoR}/>
        <br/><br/>
          <Divider variant={'middle'}/>
          <Divider variant={'middle'}/>
          <br/>
          <text className={'Text'}>Mapa</text>
          <br/>
          <img className={'Images'} src={Rutes} alt={Rutes}/>
          <br/>
        <TicketSelection/>
        <AdminLogIn/>
      </div>
    );
  }
}


export default App;
