import React, {Component} from "react";

import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class StationsEdition extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '[Station name]',
            x: 0,
            y: 0
        };
    }

    nameChanged = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(this.state.name)
    };

    xChanged = (event) => {
        this.setState({
            x: event.target.value
        })
        console.log(this.state.x)
    };

    yChanged = (event) => {
        this.setState({
            y: event.target.value
        })
        console.log(this.state.y)
    };

    render() {
        if(this.props.showing){
            return(
                <div>
                    <br/>
                    <text className={'Text'}>Edición de estaciones</text>
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
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            color={'primary'}
                            required={true}
                            placeholder={"Posición en x"}
                            id="txtStation"
                            variant="outlined"
                            label='Posicion en x'
                            onChange={this.xChanged}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            color={'primary'}
                            required={true}
                            placeholder={"Posición en y"}
                            id="txtStation"
                            variant="outlined"
                            label='Posicion en y'
                            onChange={this.yChanged}/>
                    </div>
                    <br/>
                    <div>
                        <Button
                            color={"primary"}
                            variant="contained"
                            startIcon={<AddCircleOutlineIcon/>}
                            onClick={()=>{
                                if(this.state.name !== '[Station name]' && this.state.name !== ''){
                                    try{
                                        if(this.state.x >= 0 && this.state.y >= 0){

                                        } else {
                                            alert('Digite unas coordenadas válidas')
                                        }
                                    } catch {
                                        alert('Digite unas coordenadas válidas')
                                    }
                                } else {
                                    alert('Digite una estacion válida')
                                }
                            }}>
                            Agregar estación
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                            color={'secondary'}
                            variant="contained"
                            startIcon={<HighlightOffIcon/>}
                            onClick={()=>{
                                if(this.state.name !== '[Station name]' && this.state.name !== ''){

                                } else {
                                    alert('Digite una estacion válida')
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
        }else{
            return (
                <div>
                </div>
            )
        }
    }
}

export default StationsEdition;