import React, {Component} from "react";
import './TicketInformation.css'

import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TicketBill from "./TicketBill";

class TicketInformation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            //station1: '[estacion 1]',
            //station2: '[estacion 2]',
            date: Date,
            quantity: 0,
            tvdCertification: false,
            show: false
        };
    }

    render() {
        if(this.props.show){
            return(
                <div>
                    <br/>
                    <text className={'Text'}>Información sobre el(los) tiquete(s)</text>
                    <br/><br/>
                    <div>
                        <Card>
                            <CardContent>
                                <Typography align='center' variant='h6' color="textSecondary">
                                    {'Su viaje iniciara en ' + this.props.station1 + ' y terminará en ' + this.props.station2}
                                    <br />
                                    {'- Su viaje pasara por las siguientes estaciones:'}
                                    <br />
                                    {'- '}
                                    <br />
                                    {'- '}
                                    <br />
                                    {'- '}
                                    <br />
                                    {'- Se compraran ' + this.props.quantity + ' tiquetes para el viaje, reservados para ' + this.props.date}
                                    <br />
                                    {'- Y cada uno costara x con el descuento aplicado' }
                                </Typography>
                            </CardContent>
                        </Card>
                        <br/>
                        <Button
                            color={"primary"}
                            variant="contained"
                            endIcon={<ShoppingCartIcon/>}
                            onClick={()=>{
                                if(this.state.show === false){
                                    this.setState({show: !this.state.show})
                                }
                            }}>
                            Realizar Compra
                        </Button>
                        <br/>
                    </div>
                    <br />
                    <Divider variant={'middle'}/>
                    <Divider variant={'middle'}/>
                    <TicketBill station1 = {this.props.station1} station2 = {this.props.station2} show = {this.state.show}
                                quantity = {this.props.quantity} date = {this.props.date}/>
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

export default TicketInformation;