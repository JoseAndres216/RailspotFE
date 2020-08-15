import React, {Component} from "react";
import './TicketSelection.css'
import TicketInformation from "./TicketInformation";
import axios from "axios";


import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

/*
Class for the ticket selection subcomponent
 */
class TicketSelection extends Component {
    constructor(props) {
        super(props);
        this.loadStations()
        this.state = {
            stations: [],
            id: '[id]',
            station1: '[estacion 1]',
            station2: '[estacion 2]',
            date: '[Date]',
            quantity: 0,
            tvdCertification: true,
            price: 0.0,
            show: false
        };
    }

    /*
    Methods for refreshing dynamically the class states
    */
    station1Changed = (event) => {

        this.setState({
            station1: event.target.value
        })
        if (this.state.station1 === this.state.station2) {
            this.setState({
                show: false
            })
        }
        console.log('El valor de station1 es: ' + this.state.station1)
    };

    station2Changed = (event) => {
        this.setState({
            station2: event.target.value
        })
        if (this.state.station1 === this.state.station2) {
            this.setState({
                show: false
            })
        }
        console.log('El valor de station2 es: ' + this.state.station2)
    };

    dateChanged = (event) => {
        this.setState({
            date: event.target.value,
            tvdCertification: false
        })
        console.log('El valor de date es: ' + this.state.date)
    };

    quantityChanged = (event) => {
        this.setState({
            quantity: event.target.value
        })
        console.log('Cantidad de tiquetes: ' + this.state.quantity)
    }

    idChanged = (event) => {
        this.setState({
            id: event.target.value
        })
        console.log('Cantidad de tiquetes: ' + this.state.id)
    }

    tvdCertifChanged = () => {
        this.setState({
            tvdCertification: !this.state.tvdCertification,
        })
        if (this.state.tvdCertification) {
            this.setState({
                date: 'Fecha con certificación TVD'
            })
        }
        console.log('El valor de tvd es: ' + this.state.tvdCertification)
    };

    loadStations = () => {
        try {
            var httpResult = axios({
                method: "GET",
                url: 'http://localhost:8080/railspot-1.0/routes/all',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            httpResult
                .then((response) => {
                    console.log(response.data);
                    this.setState({
                        stations: response.data,
                    });
                    console.log('Error a lo hora de cargar las estaciones');
                })
                .catch((error) => {
                    console.log('Error a lo hora de cargar las estaciones');
                });
        } catch (error) {
            console.log("La tearea falló con éxito: " + error);
        }
    }

    /*
    Method for "drawing" all the class components
    */
    render() {
        return (
            <div>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
                <br/>
                <text className={'Text'}>Selección de ruta</text>
                <br/><br/>
                <TextField
                    color={'primary'}
                    required={true}
                    placeholder={"Número de cédula"}
                    id="txbid"
                    label="Número de cédula"
                    variant="outlined"
                    onChange={this.idChanged}
                />
                <br/><br/>
                <div>
                    <Select
                        onChange={this.station1Changed}
                        value={this.state.station1}>

                        <MenuItem value={'[estacion 1]'}><em>Seleccione una estacion</em></MenuItem>
                        {this.state.stations.map(element => (
                            <MenuItem value={element}>{element}</MenuItem>
                        ))}
                    </Select>

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <Select
                        onChange={this.station2Changed}
                        value={this.state.station2}>

                        <MenuItem value={'[estacion 2]'}><em>Seleccione una estacion</em></MenuItem>
                        {this.state.stations.map(element => (
                            <MenuItem value={element}>{element}</MenuItem>
                        ))}
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

                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

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
                <br/>
                <div>
                    <Button
                        id='btnSelectticket'
                        color={'primary'}
                        variant="contained"
                        endIcon={<ConfirmationNumberIcon/>}
                        onClick={() => {
                            if (this.state.station1 !== this.state.station2) {
                                if (this.state.id !== '[id]') {
                                    if (this.state.station1 !== '[estacion 1]') {
                                        if (this.state.station2 !== '[estacion 2]') {
                                            if (this.state.date !== '[Date]' || this.state.tvdCertification) {
                                                try {
                                                    if (this.state.quantity > 0) {
                                                        if (this.state.show === false) {
                                                            this.setState({show: !this.state.show})
                                                        }
                                                        if (this.state.tvdCertification) {
                                                            this.setState({
                                                                date: 'Fecha con certificación TVD'
                                                            })
                                                        }
                                                        try {
                                                            var httpResult = axios({
                                                                method: "GET",
                                                                url: 'http://localhost:8080/railspot-1.0/routes/' +
                                                                    'calc?start=' + this.state.station1 +
                                                                    '&end=' + this.state.station2,
                                                                headers: {
                                                                    Accept: "text/plain",
                                                                    "Content-Type": "text/plain",
                                                                },
                                                            });
                                                            httpResult
                                                                .then((response) => {
                                                                    console.log(response);
                                                                    this.setState({
                                                                        price: response.data,
                                                                    });
                                                                    console.log('Tiquete reservado, por favor confirme' +
                                                                        'su compra');
                                                                })
                                                                .catch((error) => {
                                                                    console.log('No fue posible reservar el tiquete');
                                                                });
                                                        } catch (error) {
                                                            console.log("La tearea falló con éxito: " + error);
                                                        }
                                                    } else {
                                                        alert('Digite una cantidad de tiquetes válida')
                                                    }
                                                } catch (e) {
                                                    alert('Digite una cantidad de tiquetes válida')
                                                }
                                            } else {
                                                alert('Digite una fecha válida')
                                            }
                                        } else {
                                            alert('Digite una estación de llegada válida')
                                        }
                                    } else {
                                        alert('Digite una estación de salida válida')
                                    }
                                } else {
                                    alert('Digite una identificación válida')
                                }
                            } else {
                                alert('Digite dos estaciones diferentes')
                            }
                        }}>
                        Seleccionar tiquete
                    </Button>
                </div>

                <br/>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
                <TicketInformation station1={this.state.station1} station2={this.state.station2} show={this.state.show}
                                   quantity={this.state.quantity} date={this.state.date} id={this.state.id}
                                   price={this.state.price}/>
            </div>

        );
    }
}

export default TicketSelection;