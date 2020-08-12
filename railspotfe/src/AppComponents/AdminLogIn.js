import React, {Component} from "react";
import axios from 'axios';

import './AdminLogIn.css'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

class AdminLogIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: String,
            password: String
        };
    }

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

    render() {
        return(
            <div>
                <div>&nbsp;</div>

                <text className={'Text'}>Iniciar sesion como administrador</text>

                <div>&nbsp;</div>
                <div>&nbsp;</div>

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

                <div>&nbsp;</div>

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

                <div>&nbsp;</div>
                <div>&nbsp;</div>

                <div>
                    <Button
                        id='btnSignIn'
                        color={'primary'}
                        variant="contained"
                        onClick={()=> {
                            try {
                                var httpResult = axios({
                                    method: "GET",
                                    url: `http://localhost/admin/login?user=` + this.state.user + '&password='
                                            + this.state.password
                                });
                                httpResult
                                    .then((response) => {
                                        console.log(response);
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            } catch (error) {
                                console.log(error);
                            }
                        }
                        }>
                        Iniciar sesion
                    </Button>
                </div>

                <div>&nbsp;</div>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
            </div>
        );
    }

}

export default AdminLogIn;