import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AdminLogIn extends Component{
    render() {
        return(
            <div>
                <div>
                    <TextField required={true} placeholder={"Usuario"} id="filled-basic" label="Usuario" variant="outlined" />
                    <TextField required={true} placeholder={"Contraseña"} id="filled-basic" label="Contraseña" variant="outlined" />
                </div>
                <div>
                    <Button variant="outlined">Iniciar sesion</Button>
                </div>
            </div>
        );
    }
}

export default AdminLogIn;