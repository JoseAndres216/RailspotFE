import React, {Component} from "react";
import './TicketInformation.css'

import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class TicketInformation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            station1: '[estacion 1]',
            station2: '[estacion 2]',
            date: Date,
            quantity: 0,
            tvdCertification: false
        };
    }

    render() {
        return(
            <div>
                <br/>
                <text className={'Text'}>Información sobre el(los) tiquete(s)</text>
                <br/><br/>
                <div>
                    <Card>
                        <CardContent>
                            <Typography align='center' variant='h6' color="textSecondary">
                                {'Su viaje iniciara en ' + this.state.station1 + ' y terminará en ' + this.state.station2}
                                <br />
                                {'- Proyectos en una semana'}
                                <br />
                                {'- Pasar cursos sin saber como'}
                                <br />
                                {'- Mucha cafeina'}
                                <br />
                                {'- Compañeros que no hacen nada'}
                                <br />
                                {'- Ser bendecido por algun profesor bueno'}
                                <br />
                                {'- El costo de su(s) tiquete(s) es de 100 pesos'}
                            </Typography>
                        </CardContent>
                    </Card>
                    <br/>
                    <Button
                        color={"primary"}
                        variant="contained"
                        endIcon={<ShoppingCartIcon/>}
                        onClick={()=>{
                            console.log('Accion del boton: Realizar compra')
                        }}>
                        Realizar Compra
                    </Button>
                    <br/>
                </div>
                <br />
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
            </div>
        );
    }
}

export default TicketInformation;