import React, {Component} from "react";

import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class StationsEdition extends Component{
    render() {
        if(this.props.showing){
            return(
                <div>
                    <br/>
                    <text className={'Text'}>Edición de estaciones</text>
                    <br/><br/>
                    <Card>
                        <CardContent>
                            <Typography align='center' variant='h6' color="textSecondary">
                                {' '}
                                <br />
                                {' '}
                                <br />
                                {'Aqui va el grafo'}
                                <br />
                                {' '}
                                <br />
                                {'Mucho Texto ahre'}
                            </Typography>
                        </CardContent>
                    </Card>
                    <br/>
                    <div>
                        <TextField
                            color={'primary'}
                            required={true}
                            placeholder={"Nombre de estación"}
                            id="txtStation"
                            variant="outlined"
                            onChange={this.userChanged}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            color={'primary'}
                            required={true}
                            placeholder={"Posición en x"}
                            id="txtStation"
                            variant="outlined"
                            onChange={this.userChanged}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            color={'primary'}
                            required={true}
                            placeholder={"Posición en y"}
                            id="txtStation"
                            variant="outlined"
                            onChange={this.userChanged}/>
                    </div>
                    <br/>
                    <div>
                        <Button
                            color={"primary"}
                            variant="contained"
                            startIcon={<AddCircleOutlineIcon/>}
                            onClick={()=>{
                                console.log('Accion del boton: Agregar estacion')
                            }}>
                            Agregar estación
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                            color={'secondary'}
                            variant="contained"
                            startIcon={<HighlightOffIcon/>}
                            onClick={()=>{
                                console.log('Accion del boton: Eliminar estacion')
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