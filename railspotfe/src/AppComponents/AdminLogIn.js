import React, {Component} from "react";
import './AdminLogIn.css'

import axios from 'axios';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import PersonIcon from '@material-ui/icons/Person';
import RutesEdition from "./RutesEdition";
import StationsEdition from "./StationsEdition";
import ConsultTickets from "./ConsultTickets";

/*
Class for the admin log in subcomponent
 */
class AdminLogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '[Usuario]',
            password: '[Contraseña]',
            showing: false
        };
    }

    /*
    Methods for refreshing dynamically the class states
    */
    userChanged = (event) => {
        this.setState({
            user: event.target.value
        })
        console.log(this.state.user)
    };

    passwordChanged = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(this.state.password)
    };

    /*
    Method for "drawing" all the class components
    */
    render() {
        return (
            <div>
                <br/>
                <text className={'Text'}>Iniciar sesion como administrador</text>
                <br/><br/>
                <div>
                    <TextField
                        color={'primary'}
                        required={true}
                        placeholder={"Usuario"}
                        id="txbUser"
                        label="Usuario"
                        variant="outlined"
                        onChange={this.userChanged}
                    />
                </div>
                <br/>
                <div>
                    <TextField
                        color={'primary'}
                        required={true}
                        placeholder={"Contraseña"}
                        id="txbPassword"
                        label="Contraseña"
                        variant="outlined"
                        onChange={this.passwordChanged}
                    />
                </div>
                <br/><br/>
                <div>
                    <Button
                        id='btnSignIn'
                        color={'primary'}
                        variant="contained"
                        endIcon={<PersonIcon/>}
                        onClick={() => {
                            if (this.state.user !== '[Usuario]' && this.state.password !== '[Contraseña]') {
                                try {
                                    var httpResult = axios({
                                        method: "GET",
                                        url: `http://localhost:8080/railspot-1.0/admin/login?user=` + this.state.user + '&password='
                                            + this.state.password
                                    });
                                    httpResult
                                        .then((response) => {
                                            console.log(response.status)
                                            if ((this.state.showing === false) && (response.status === 202)) {
                                                this.setState({showing: !this.state.showing})
                                            }
                                        })
                                        .catch((error) => {
                                            alert("Credenciales inválidas")
                                        });
                                } catch (error) {
                                    console.log("me mamé doblemente lol")
                                    console.log(error);
                                }

                            } else {
                                alert('Digite un usuario y/o contraseña válido')
                            }
                        }}>
                        Iniciar sesion
                    </Button>
                </div>
                <br/>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
                <RutesEdition showing={this.state.showing}/>
                <StationsEdition showing={this.state.showing}/>
                <ConsultTickets showing={this.state.showing}/>
            </div>
        );
    }

}

export default AdminLogIn;