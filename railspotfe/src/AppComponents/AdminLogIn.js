import React, {Component} from "react";
import './AdminLogIn.css'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import PersonIcon from '@material-ui/icons/Person';
import RutesEdition from "./RutesEdition";
import StationsEdition from "./StationsEdition";
import ConsultTickets from "./ConsultTickets";

class AdminLogIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '[Usuario]',
            password: '[Contraseña]',
            showing: false
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
                            if(this.state.user!=='[Usuario]' && this.state.password !== '[Contraseña]'){
                                if(this.state.showing === false){ //esta vara
                                    this.setState({showing: !this.state.showing})
                                }
                                /*try {
                                    var httpResult = axios({
                                        method: "GET",
                                        url: `http://localhost/admin/login?user=` + this.state.user + '&password='
                                                + this.state.password
                                    });
                                    httpResult
                                        .then((response) => {
                                            console.log(response); //esa vara va aqui
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        });
                                } catch (error) {
                                    console.log(error);
                                }*/
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
                <RutesEdition showing = {this.state.showing}/>
                <StationsEdition showing = {this.state.showing}/>
                <ConsultTickets showing = {this.state.showing}/>
            </div>
        );
    }

}

export default AdminLogIn;