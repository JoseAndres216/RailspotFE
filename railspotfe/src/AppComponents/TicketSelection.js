import React, {Component} from "react";
import axios from 'axios'
import './TicketSelection.css'

import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

class TicketSelection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            station1: String,
            station2: String,
            date: Date,
            quantity: 0,
            tvdCertification: false
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

    dateChanged = (event) => {
        this.setState({
            date: event.target.value
        })
        console.log('El valor de date es: ' + this.state.date)
    };

    quantityChanged = (event) => {
        this.setState({
            quantity: event.target.value
        })
        console.log('Cantidad de tiquetes: ' + this.state.date)
    }

    tvdCertifChanged = () => {
        this.setState({
            tvdCertification: !this.state.tvdCertification
        })
        console.log('El valor de tvd es: ' + this.state.tvdCertification)
    };

    render() {
        return(
            <div>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
                <br/>
                <text className={'Text'}>Seleccion de ruta</text>
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

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Select
                        onChange={this.station2Changed}
                        value={this.state.station2}>

                        <MenuItem value={''}><em>Seleccione una estacion</em></MenuItem>
                        <MenuItem value={'Estacion ejemplo 1'}>Estacion ejemplo 1</MenuItem>
                        <MenuItem value={'Estacion ejemplo 2'}>Estacion ejemplo 2</MenuItem>
                        <MenuItem value={'Estacion ejemplo 3'}>Estacion ejemplo 3</MenuItem>
                    </Select>
                </div>
                <br/>
                <div>
                    <TextField
                        id="date"
                        label="Fecha de viaje"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        onChange={this.dateChanged}/>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <TextField
                        color={'primary'}
                        required={true}
                        placeholder={"Cantidad"}
                        id="txbQuantity"
                        label="Cantidad de tiquetes"
                        variant="outlined"
                        onChange={this.quantityChanged}
                    />
                </div>
                <br/>
                <div>
                    <Checkbox color='primary' onChange={this.tvdCertifChanged}> </Checkbox>
                    <text className={'Body'}>Desea comprar tiquetes para varios dias del mes? (certificacion TVD)</text>
                </div>
                <br/><br/>
                <div>
                    <Button
                        id='btnSelectticket'
                        color={'primary'}
                        variant="contained"
                        onClick={()=>{
                            console.log('Accion del boton: Seleccionar tiquete')
                        }}>
                        Seleccionar tiquete
                    </Button>
                </div>

                <br/>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
            </div>

        );
    }
}

export default TicketSelection;