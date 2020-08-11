import React, {Component} from "react";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class StationsEdition extends Component{
    render() {
        return(
            <div>
                <div>&nbsp;</div>
                <text className={'Text'}>Edición de estaciones</text>
                <div>&nbsp;</div>
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
                <div>&nbsp;</div>
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
                <div>&nbsp;</div>
                <div>
                    <Button
                        color={"primary"}
                        variant="contained">
                        Agregar estación
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                        color={'secondary'}
                        variant="contained">
                        Eliminar estación
                    </Button>
                </div>
                <div>&nbsp;</div>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
            </div>
        );
    }
}

export default StationsEdition;