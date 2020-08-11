import React, {Component} from "react";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

class TicketBill extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '111111',
            station1: '',
            station2: '',
            troughStations: [],
            date: Date,
            quantity: 0,
            ticketPrice: 0.0,
            discount: 0.0
        };
    }

    render() {
        return(
            <div>
                <div>&nbsp;</div>
                <Card>
                    <CardContent>
                        <Typography align='center' variant='h6' color="textSecondary">
                            {'Railspot Costa Rica'}
                            <br />
                            {'Factura N° ' + parseInt(0 + (Math.random() * (1000000)-0))}
                            <br />
                            {'Fecha:' + new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()}
                            <br />
                            {'Hora:' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()}
                            <br />
                            {'Cliente #' + this.state.id}
                            <br /><br />
                            {'Viaje desde: ' + this.state.station1 + 'hasta: ' + this.state.station2}
                            <br />
                            {'Tiquete(s) reservado(s) para el dia: ' + this.state.date}
                            <br />
                            {'Total de tiquetes reservados: ' + this.state.quantity}
                            <br /><br />
                            {'Costo por tiquete: .................................................................... c'
                                + this.state.ticketPrice}
                            <br />
                            {'Descuento aplicado: ................................................................ c'
                            + this.state.discount}
                            <br />
                            {'Costo total: .............................................................................. c'
                                + ((this.state.ticketPrice * this.state.quantity) - this.state.discount)}
                            <br /><br />
                            {'Gracias por preferirnos!'}
                            <br /><br />
                        </Typography>
                        <Typography align='center' variant='subtitle2' color='textSecondary'>
                            Railspot CR se reserva el derecho de admision y no se hace cargo de objetos extraviados por los clientes
                            <br />
                            Los tiquetes comprados en una fecha seran admitidos en fechas distintas en caso de contar con la certificacion correspondiente
                        </Typography>
                    </CardContent>
                </Card>
                <div>&nbsp;</div>
                <Divider variant={'middle'}/>
                <Divider variant={'middle'}/>
            </div>
        );
    }
}

export default TicketBill;