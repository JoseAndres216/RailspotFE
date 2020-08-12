import React, {Component} from "react";
import axios from 'axios';
import './AdminLogIn.css'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import PersonIcon from '@material-ui/icons/Person';

class AdminLogIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '[Usuario]',
            password: '[Contraseña]'
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
                <br/>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
            </div>
        );
    }

}

export default AdminLogIn;