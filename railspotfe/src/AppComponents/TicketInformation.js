import React, {Component} from "react";

import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

class TicketInformation extends Component{
    render() {
        return(
            <div>
                <div>&nbsp;</div>
                <text className={'Text'}>Información sobre el (los) tiquete (s)</text>
                <div>&nbsp;</div>
                <div>
                    <Card>
                        <CardContent>
                            <Typography align='center' variant='h6' color="textSecondary">
                                {'Su viaje iniciara en Intro y Taller y terminará en ganas de tirarse del D3, y también pasara por:'}
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
                    <div>&nbsp;</div>
                    <Button
                        color={"primary"}
                        variant="contained"
                        onClick={()=>{
                            console.log('Accion del boton: Realizar compra')
                        }}>
                        Realizar Compra
                    </Button>
                    <div>&nbsp;</div>
                </div>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
            </div>
        );
    }
}

export default TicketInformation;