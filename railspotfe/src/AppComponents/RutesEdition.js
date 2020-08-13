import React, {Component} from "react";
import './RutesEdition.css'

import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class RutesEdition extends Component{
    constructor(props) {
        super(props);
        this.state = {
            station1: '[estacion 1]',
            station2: '[estacion 2]',
            price: 0.0
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
                    <br/><br/>
                    <div>
                        <Button
                            color={'primary'}
                            variant="contained"
                            startIcon={<AddCircleOutlineIcon/>}
                            onClick={()=>{
                                console.log('Accion del boton: Agregar ruta')
                            }}>
                            Agregar ruta
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                            color={'secondary'}
                            variant="contained"
                            startIcon={<HighlightOffIcon/>}
                            onClick={()=>{
                                console.log('Accion del boton: Eliminar ruta')
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