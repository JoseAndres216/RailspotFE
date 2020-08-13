import React, {Component} from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";


class ConsultTickets extends Component{
    constructor(props) {
        super(props);
        this.state = {
            option : '[opcion]',
            station : '[estacion]',
            id: '[id]',
            date: '[fecha]'
        }
    }

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
                                <MenuItem value={'Estacion ejemplo 1'}>Estacion ejemplo 1</MenuItem>
                                <MenuItem value={'Estacion ejemplo 2'}>Estacion ejemplo 2</MenuItem>
                                <MenuItem value={'Estacion ejemplo 3'}>Estacion ejemplo 3</MenuItem>
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