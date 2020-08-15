import React, {Component} from "react";
import './RutesEdition.css'
import axios from "axios";

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
class RutesEdition extends Component {
    constructor(props) {
        super(props);
        this.loadStations()
        this.state = {
            stations: [],
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
    };

    station2Changed = (event) => {
        this.setState({
            station2: event.target.value
        })
    };

    distanceChanged = (event) => {
        this.setState({
            distance: event.target.value
        })
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
                    this.setState({
                        stations: response.data,
                    });
                    alert('Error a lo hora de cargar las estaciones');
                })
                .catch((error) => {
                    alert('Error a lo hora de cargar las estaciones');
                });
        } catch (error) {
            alert("La tarea falló con éxito: " + error);
        }
    }

    /*
    Method for "drawing" all the class components
    */
    render() {
        if (this.props.showing) {
            return (
                <div>
                    <br/>
                    <text className={'Text'}>Edicion de rutas</text>
                    <br/><br/>
                    <div>
                        <Select
                            onChange={this.station1Changed}
                            value={this.state.station1}>

                            <MenuItem value={'[estacion 1]'}><em>Seleccione una estacion</em></MenuItem>
                            {this.state.stations.map(element =>(
                                <MenuItem value={element}>{element}</MenuItem>
                            ))}
                        </Select>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <Select
                            onChange={this.station2Changed}
                            value={this.state.station2}>

                            <MenuItem value={'[estacion 2]'}><em>Seleccione una estacion</em></MenuItem>
                            {this.state.stations.map(element =>(
                                <MenuItem value={element}>{element}</MenuItem>
                            ))}
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
                            onClick={() => {
                                if (this.state.station1 !== '[estacion 1]' && this.state.station2 !== '[estacion 2]') {
                                    if (this.state.station1 !== this.state.station2) {
                                        try {
                                            if (this.state.distance > 0) {
                                                try {
                                                    var httpResult = axios({
                                                        method: "PUT",
                                                        url: 'http://localhost:8080/railspot-1.0/admin/route?start='
                                                            + this.state.station1 + '&end=' + this.state.station2 +
                                                            '&km=' + this.state.distance
                                                    });
                                                    httpResult
                                                        .then((response) => {
                                                            this.loadStations()
                                                        })
                                                        .catch(() => {
                                                            alert("No fue posible agregar la ruta")
                                                        });
                                                } catch (error) {
                                                    alert("La tarea falló con éxito: " + error)
                                                }
                                            } else {
                                                alert('Digite un precio válido')
                                            }
                                        } catch {
                                            alert('Digite una distancia válida.')
                                        }
                                    } else {
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
                            onClick={() => {
                                if (this.state.station1 !== '[estacion 1]' && this.state.station2 !== '[estacion 2]') {
                                    if (this.state.station1 !== this.state.station2) {
                                        try {
                                            var httpResult = axios({
                                                method: "DELETE",
                                                url: 'http://localhost:8080/railspot-1.0/admin/route?start='
                                                    + this.state.station1 + '&end=' + this.state.station2
                                            });
                                            httpResult
                                                .then((response) => {
                                                    if (response.status !== 202) {
                                                        alert(response.data)
                                                    } else {
                                                        alert('Ruta eliminada con éxito!')
                                                        this.loadStations()
                                                    }
                                                })
                                                .catch(() => {
                                                    alert("No fue posible eliminar la ruta")
                                                });
                                        } catch (error) {
                                            alert("La tarea falló con éxito: " + error)
                                        }
                                    } else {
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
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default RutesEdition;