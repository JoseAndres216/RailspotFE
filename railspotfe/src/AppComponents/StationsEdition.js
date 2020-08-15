import React, {Component} from "react";
import './StationsEdition.css'
import axios from "axios";
import Rutes from "../Resources/Rutes.png";

import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


/*
Class for the stations editor subcomponent
 */
class StationsEdition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '[Station name]'
        };
    }

    /*
    Methods for refreshing dynamically the class states
    */
    nameChanged = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    xChanged = (event) => {
        this.setState({
            x: event.target.value
        })
    };

    yChanged = (event) => {
        this.setState({
            y: event.target.value
        })
    };

    /*
    Method for "drawing" all the class components
    */
    render() {
        if (this.props.showing) {
            return (
                <div>
                    <br/>
                    <text className={'Text'}>Edición de estaciones</text>
                    <br/><br/>
                    <img src={Rutes} align={'top'} alt={Rutes} className={'Images'}/>
                    <br/><br/>
                    <div>
                        <TextField
                            color={'primary'}
                            required={true}
                            placeholder={"Nombre de la estación"}
                            id="txtStation"
                            variant="outlined"
                            label='Nombre de la estación'
                            onChange={this.nameChanged}/>
                    </div>
                    <br/>
                    <div>
                        <Button
                            color={"primary"}
                            variant="contained"
                            startIcon={<AddCircleOutlineIcon/>}
                            onClick={() => {
                                if (this.state.name !== '[Station name]' && this.state.name !== '') {
                                    try {
                                        var httpResult = axios({
                                            method: "PUT",
                                            url: 'http://localhost:8080/railspot-1.0/admin/station?value=' +
                                                this.state.name
                                        });
                                        httpResult
                                            .then((response) => {
                                                alert('Estación agregada con éxito!')
                                            })
                                            .catch(() => {
                                                alert("No fue posible agregar la estación")
                                            });
                                    } catch (error) {
                                        alert("La tarea falló con éxito: " + error)
                                    }
                                } else {
                                    alert('Digite una estación válida')
                                }
                            }}>
                            Agregar estación
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                            color={'secondary'}
                            variant="contained"
                            startIcon={<HighlightOffIcon/>}
                            onClick={() => {
                                if (this.state.name !== '[Station name]' && this.state.name !== '') {
                                    try {
                                        var httpResult = axios({
                                            method: "DELETE",
                                            url: 'http://localhost:8080/railspot-1.0/admin/station?value=' +
                                                this.state.name
                                        });
                                        httpResult
                                            .then((response) => {
                                                alert('Estación eliminada con éxito!')
                                            })
                                            .catch(() => {
                                                alert("No fue posible eliminar la estación ya uqe posee tiquetes activos")
                                            });
                                    } catch (error) {
                                        alert("La tarea falló con éxito: " + error)
                                    }
                                } else {
                                    alert('Digite una estación válida')
                                }
                            }}>
                            Eliminar estación
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

export default StationsEdition;