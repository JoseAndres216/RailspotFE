import React, {Component} from "react";
import './ConsultTickets.css'

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

/*
Class for the tickets consults subcomponent
 */
class ConsultTickets extends Component{
    constructor(props) {
        super(props);
        this.loadStations()
        this.state = {
            tickets: [],
            stations: [],
            option : '[opcion]',
            station : '[estacion]',
            id: '[id]',
            date: '[fecha]'
        }
    }

    /*
    Methods for refreshing dynamically the class states
    */
    optionChanged = (event) => {
        this.setState({
            option: event.target.value
        })
        console.log('El valor de station es: ' + this.state.option)
    };

    stationChanged = (event) => {
        this.setState({
            station: event.target.value
        })
        console.log('El valor de station es: ' + this.state.station)
    };

    idChanged = (event) => {
        this.setState({
            id: event.target.value
        })
        console.log('El valor de station es: ' + this.state.id)
    };

    dateChanged = (event) => {
        this.setState({
            date: event.target.value
        })
        console.log('El valor de station es: ' + this.state.date)
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
                    console.log(response);
                    this.setState({
                        stations: response.data,
                    });
                    alert('Error a lo hora de cargar las estaciones');
                })
                .catch(() => {
                    alert('Error a lo hora de cargar las estaciones');
                });
        } catch (error) {
            alert("La tearea falló con éxito: " + error);
        }
    }

    loadresultsID(){
        try {
            var httpResult = axios({
                method: "GET",
                url: 'http://localhost:8080/railspot-1.0/reservations/byPerson?id=' + this.state.id,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            httpResult
                .then((response) => {
                    console.log(response);
                    this.setState({
                        tickets: response.data,
                    });
                    alert('Los tiquetes fueron cargados exitosamente');
                })
                .catch(() => {
                    alert('Error a lo hora de cargar los tiquetes');
                });
        } catch (error) {
            alert("La tearea falló con éxito: " + error);
        }
    }

    loadresultsDATE(){
        try {
            var httpResult = axios({
                method: "GET",
                url: 'http://localhost:8080/railspot-1.0/reservations/byDate?date=' + this.state.date,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            httpResult
                .then((response) => {
                    console.log(response);
                    this.setState({
                        tickets: response.data,
                    });
                    alert('Los tiquetes fueron cargados exitosamente');
                })
                .catch(() => {
                    alert('Error a lo hora de cargar los tiquetes');
                });
        } catch (error) {
            alert("La tearea falló con éxito: " + error);
        }
    }

    loadresultsSTATION(){
        try {
            var httpResult = axios({
                method: "GET",
                url: 'http://localhost:8080/railspot-1.0/reservations/byStation?name=' + this.state.station,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            httpResult
                .then((response) => {
                    console.log(response);
                    this.setState({
                        tickets: response.data,
                    });
                    alert('Los tiquetes fueron cargados exitosamente');
                })
                .catch(() => {
                    alert('Error a lo hora de cargar los tiquetes');
                });
        } catch (error) {
            alert("La tearea falló con éxito: " + error);
        }
    }

    /*
    Method for "drawing" all the class components
    */
    render() {
        if(this.props.showing){
            return(
                <div>
                    <br/>
                    <text className={'Text'}>Consultas</text>
                    <br/><br/>
                    <div>
                        <Select onChange={this.optionChanged}
                                value={this.state.option}>
                            <MenuItem value={'[opcion]'}><em>Seleccione una opción</em></MenuItem>
                            <MenuItem value={'fecha'}>Fecha</MenuItem>
                            <MenuItem value={'id'}>ID</MenuItem>
                            <MenuItem value={'estacion'}>Estacion</MenuItem>
                        </Select>
                    </div>
                    <br/><br/>
                    <div>
                        <form>
                            <TextField
                                id="date"
                                label="Fecha de Viaje"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant='outlined'
                                onChange={this.dateChanged}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                color={'primary'}
                                required={true}
                                placeholder={"ID de usuario"}
                                id="txtStation"
                                variant="outlined"
                                label='ID de usuario'
                                onChange={this.idChanged}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Select onChange={this.stationChanged}
                                    value={this.state.station}>
                                <MenuItem value={'[estacion]'}><em>Seleccione una estacion</em></MenuItem>
                                {this.state.stations.map(element =>(
                                    <MenuItem value={element}>{element}</MenuItem>
                                ))}
                            </Select>
                        </form>
                        <div>
                            <br/>
                            <Button
                                color={"primary"}
                                variant="contained"
                                onClick={()=>{
                                    if(this.state.option !== '[opcion]'){
                                        if(this.state.option === 'fecha'){
                                            if(this.state.date !== '[fecha]'){
                                                if(this.state.option === 'id'){
                                                    this.loadresultsID()
                                                } else if(this.state.option === 'date'){
                                                    this.loadresultsDATE()
                                                } else{
                                                    this.loadresultsSTATION()
                                                }
                                            } else {
                                                alert('Digite una fecha válida')
                                            }
                                        } else {
                                            if(this.state.option === 'id'){
                                                if(this.state.id !== '[id]'){

                                                } else {
                                                    alert('Digite un ID válida')
                                                }
                                            } else {
                                                if(this.state.option === 'estacion') {
                                                    if(this.state.station !== '[estacion]') {

                                                    } else {
                                                        alert('Digite una estacion válida')
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        alert('Digite una opción válida')
                                    }
                                }}>
                                Realizar consulta
                            </Button>
                            <br /><br />
                            <table>

                            </table>
                        </div>
                    </div>
                    <br />
                    <text>Resultados de la búsqueda:</text>
                    <br />
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Información del tiquete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.tickets.map((ticket) => (
                                    <TableRow key={ticket}>
                                        <TableCell component="th" scope="row">
                                            {ticket}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br />
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

export default ConsultTickets;