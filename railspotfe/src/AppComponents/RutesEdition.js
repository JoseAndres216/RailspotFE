import React, {Component} from "react";
import './RutesEdition.css'

import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TextField from "@material-ui/core/TextField";

/*
Class for the rutes editor subcomponent
 */
class RutesEdition extends Component{
    constructor(props) {
        super(props);
        this.state = {
            station1: '[estacion 1]',
            station2: '[estacion 2]',
            distance: 0
        };
    }

    /*
    Methods for refreshing dynamically the class states
    */
    station1Changed = (event) => {
        this.setState({
            station1: event.target.value
        })
        console.log('El valor de station1 es: ' + this.state.station1)
    };

    station2Changed = (event) => {
        this.setState({
            station2: event.target.value
        })
        console.log('El valor de station2 es: ' + this.state.station2)
    };

    distanceChanged = (event) => {
        this.setState({
            distance: event.target.value
        })
        console.log('El valor de station2 es: ' + this.state.distance)
    };

    /*
    Method for "drawing" all the class components
    */
    render() {
        if(this.props.showing){
            return(
                <div>
                    <br/>
                    <text className={'Text'}>Edicion de rutas</text>
                    <br/><br/>
                    <div>
                        <Select
                            onChange={this.station1Changed}
                            value={this.state.station1}>

                            <MenuItem value={'[estacion 1]'}><em>Seleccione una estacion</em></MenuItem>
                            <MenuItem value={'Estacion ejemplo 1'}>Estacion ejemplo 1</MenuItem>
                            <MenuItem value={'Estacion ejemplo 2'}>Estacion ejemplo 2</MenuItem>
                            <MenuItem value={'Estacion ejemplo 3'}>Estacion ejemplo 3</MenuItem>
                        </Select>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Select
                            onChange={this.station2Changed}
                            value={this.state.station2}>

                            <MenuItem value={'[estacion 2]'}><em>Seleccione una estacion</em></MenuItem>
                            <MenuItem value={'Estacion ejemplo 1'}>Estacion ejemplo 1</MenuItem>
                            <MenuItem value={'Estacion ejemplo 2'}>Estacion ejemplo 2</MenuItem>
                            <MenuItem value={'Estacion ejemplo 3'}>Estacion ejemplo 3</MenuItem>
                        </Select>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <TextField
                            color={'primary'}
                            required={true}
                            placeholder={"Distancia de la ruta"}
                            id="txbCosto"
                            variant="outlined"
                            label='Distancia de la ruta'
                            onChange={this.distanceChanged}/>
                    </div>
                    <br/><br/>
                    <div>
                        <Button
                            color={'primary'}
                            variant="contained"
                            startIcon={<AddCircleOutlineIcon/>}
                            onClick={()=>{
                                if(this.state.station1 !== '[estacion 1]' || this.state.station2 !== '[estacion 1]'){
                                    if(this.state.station1 !== this.state.station2){
                                        try{
                                            if(this.state.price > 0){

                                            } else {
                                                alert('Digite un precio válido')
                                            }
                                        } catch {
                                            alert('Digite un precio válido')
                                        }
                                    } else{
                                        alert('Digite dos estaciones diferentes')
                                    }
                                } else {
                                    alert('Digite una estación válida')
                                }
                            }}>
                            Agregar ruta
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                            color={'secondary'}
                            variant="contained"
                            startIcon={<HighlightOffIcon/>}
                            onClick={()=>{
                                if(this.state.station1 !== '[estacion 1]' || this.state.station2 !== '[estacion 1]'){
                                    if(this.state.station1 !== this.state.station2){

                                    } else{
                                        alert('Digite dos estaciones diferentes')
                                    }
                                } else {
                                    alert('Digite una estación válida')
                                }
                            }}>
                            Eliminar ruta
                        </Button>
                    </div>
                    <br/>
                    <Divider variant={'middle'}/>
                    <Divider variant={'middle'}/>
                </div>
            );
        }else{
            return (
                <div>
                </div>
            )
        }
    }
}

export default RutesEdition;