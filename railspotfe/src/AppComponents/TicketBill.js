import React, {Component} from "react";
import './TicketBill.css'

import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';


/*
Class for the ticket bill subcomponent
 */
class TicketBill extends Component{
    constructor(props) {
        super(props);
        this.calcDiscount()
        this.state = {
            discount: 0.0
        };
    }

    calcDiscount(){
        if(this.props.quantity > 1 && this.props.quantity <= 46){
            this.setState({
                discount: ((this.props.price * this.props.quantity) * (0.02*this.props.quantity))
            })
        } else if(this.props.quantity > 46){
            this.setState({
                discount: ((this.props.price * this.props.quantity) * (0.02*46))
            })
        }

        return this.state.discount
    }

    /*
    Method for "drawing" all the class components
    */
    render() {
        if(this.props.show){
            return(
                <div>
                    <br/>
                    <text className={'Text'}>Factura de compra</text>
                    <br/><br/>
                    <Card>
                        <CardContent>
                            <Typography align='center' variant='h6' color="textSecondary">
                                {'Railspot Costa Rica'}
                                <br />
                                {'Factura N° ' + Math.floor(Math.random()*(1000000-1+1)+1)}
                                <br />
                                {'Fecha: ' + new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()}
                                <br />
                                {'Hora: ' + new Date().getHours() + ':' + new Date().getMinutes()}
                                <br />
                                {'Cliente: ' + this.props.id}
                                <br /><br />
                                {'Inicio del viaje: ' + this.props.station1}
                                <br />
                                {'Final del viaje: ' + this.props.station2}
                                <br />
                                {'Tiquete(s) reservado(s) para el dia: ' + this.props.date}
                                <br />
                                {'Total de tiquetes reservados: ' + this.props.quantity}
                                <br /><br />
                                {'Costo por tiquete: .................................................................... c'
                                + this.props.price}
                                <br />
                                {'Descuento aplicado: ................................................................ c'
                                + this.calcDiscount()}
                                <br />
                                {'Costo total: .............................................................................. c'
                                + ((this.props.price * this.props.quantity) - this.calcDiscount())}
                                <br /><br />
                                {'Gracias por preferirnos!'}
                                <br /><br />
                            </Typography>
                            <Typography align='center' variant='subtitle2' color='textSecondary'>
                                Railspot CR se reserva el derecho de admision y no se hace cargo de objetos extraviados por los clientes
                                <br />
                                Los tiquetes comprados en una fecha seran admitidos en fechas distintas en caso de contar con la certificacion correspondiente
                                <br /><br />
                            </Typography>
                            <Typography align='center' variant='caption' color='textSecondary'>
                                Que le cuesta ponernos un 100? ☹
                                <br />
                                No es mucho pero es un trabajo honesto
                            </Typography>
                        </CardContent>
                    </Card>
                    <br/>
                    <Button
                        color={'primary'}
                        variant="contained"
                        endIcon={<ConfirmationNumberIcon/>}
                        onClick={() => {window.location.reload()}}>
                        Comprar más tiquetes
                    </Button>
                    <br/>
                    <br/>
                    <Divider variant={'middle'}/>
                    <Divider variant={'middle'}/>
                </div>
            );
        }else{
            return(
                <div>

                </div>
            )
        }

    }
}

export default TicketBill;