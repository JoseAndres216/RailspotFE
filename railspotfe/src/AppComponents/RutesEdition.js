import React, {Component} from "react";
import './RutesEdition.css'

import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

class RutesEdition extends Component{
    constructor(props) {
        super(props);
        this.state = {
            station1: String,
            station2: String
        };
    }

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

    render() {
        return(
            <div>
                <div>&nbsp;</div>
                <text className={'Text'}>Edicion de rutas</text>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                    <Select
                        onChange={this.station1Changed}
                        value={this.state.station1}>

                        <MenuItem value={''}><em>Seleccione una estacion</em></MenuItem>
                        <MenuItem value={'Estacion ejemplo 1'}>Estacion ejemplo 1</MenuItem>
                        <MenuItem value={'Estacion ejemplo 2'}>Estacion ejemplo 2</MenuItem>
                        <MenuItem value={'Estacion ejemplo 3'}>Estacion ejemplo 3</MenuItem>
                    </Select>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Select
                        onChange={this.station2Changed}
                        value={this.state.station2}>

                        <MenuItem value={''}><em>Seleccione una estacion</em></MenuItem>
                        <MenuItem value={'Estacion ejemplo 1'}>Estacion ejemplo 1</MenuItem>
                        <MenuItem value={'Estacion ejemplo 2'}>Estacion ejemplo 2</MenuItem>
                        <MenuItem value={'Estacion ejemplo 3'}>Estacion ejemplo 3</MenuItem>
                    </Select>
                </div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>
                    <Button
                        color={'primary'}
                        variant="contained"
                        onClick={()=>{
                            console.log('Accion del boton: Agregar ruta')
                        }}>
                        Agregar ruta
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                        color={'secondary'}
                        variant="contained"
                        onClick={()=>{
                            console.log('Accion del boton: Eliminar ruta')
                        }}>
                        Eliminar ruta
                    </Button>
                </div>
                <div>&nbsp;</div>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
            </div>
        );
    }
}

export default RutesEdition;