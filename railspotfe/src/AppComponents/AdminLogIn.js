import React, {Component} from "react";
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
        this.user = event.target.value
    };

    passwordChanged = (event) => {
        this.password = event.target.value
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
                        onClick={this.btnLoginOnClick()}>
                        Iniciar sesion
                    </Button>
                </div>

                <div>&nbsp;</div>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
            </div>
        );
    }

    btnLoginOnClick(){
        console.log("Usuario: " + this.user + ", contrasena: " + this.password)
    }
}

export default AdminLogIn;