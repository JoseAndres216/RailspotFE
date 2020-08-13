import React, {Component} from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";


class ConsultTickets extends Component{
    constructor(props) {
        super(props);
        this.state = {
            option : '[opcion]',
            station : '[estacion]'
        }
    }

    stationChanged = (event) => {
        this.setState({
            station: event.target.value
        })
        console.log('El valor de station es: ' + this.station)
    };


    render() {
        if(this.props.showing){
            return(
                <div>
                    <br/>
                    <text className={'Text'}>Consultas</text>
                    <br/><br/>
                    <div>
                        <Select onChange={this.stationChanged}
                                value={this.option}>
                            <MenuItem value={''}><em>Seleccione una estacion</em></MenuItem>
                            <MenuItem value={'Estacion ejemplo 1'}>Fecha</MenuItem>
                            <MenuItem value={'Estacion ejemplo 2'}>ID</MenuItem>
                            <MenuItem value={'Estacion ejemplo 3'}>Estacion</MenuItem>
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
                                }}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TextField
                                color={'primary'}
                                required={true}
                                placeholder={"ID de usuario"}
                                id="txtStation"
                                variant="outlined"
                                onChange={this.userChanged}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Select onChange={this.stationChanged}
                                    value={this.station}>
                                <MenuItem value={''}><em>Seleccione una estacion</em></MenuItem>
                                <MenuItem value={'Estacion ejemplo 1'}>Estacion 1</MenuItem>
                                <MenuItem value={'Estacion ejemplo 2'}>Estacion 2</MenuItem>
                                <MenuItem value={'Estacion ejemplo 3'}>Estacion 3</MenuItem>
                            </Select>
                        </form>
                        <div>
                            <br/>
                            <Button
                                color={"primary"}
                                variant="contained"
                                onClick={()=>{
                                    console.log('Accion del boton: Realizar consulta')
                                }}>
                                Realizar consulta
                            </Button>
                            <br /><br />
                            <Card>
                                <CardContent>
                                    <Typography align='center' variant='h6' color="textSecondary">
                                        {'Fecha: En este dia hay x viajes.'}
                                        <br />
                                        {'ID: este usuario tiene 23189312 viajes activos.'}
                                        <br />
                                        {'Estacion: por esta estacion pasan 123 trenes.'}
                                        <br />
                                        {'Mucho Texto'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
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

export default ConsultTickets;