import React, {Component} from "react";
import './TicketInformation.css'
import TicketBill from "./TicketBill";
import axios from "axios";


import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

/*
Class for the ticket information subcomponent
 */
class TicketInformation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    /*
    Method for "drawing" all the class components
    */
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
                                    {'Su viaje iniciará en ' + this.props.station1 + ' y terminará en ' + this.props.station2}
                                    <br />
                                    {'Su viaje pasará por las siguientes estaciones:'}
                                    <br />
                                    {'- '}
                                    <br />
                                    {'Se comprarán ' + this.props.quantity + ' tiquetes para el viaje, reservados para el día: ' + this.props.date}
                                    <br />
                                    {'Y cada uno tendrá un costo de ' + this.props.price + ' colones' }
                                </Typography>
                            </CardContent>
                        </Card>
                        <br/>
                        <Button
                            color={"primary"}
                            variant="contained"
                            endIcon={<ShoppingCartIcon/>}
                            onClick={()=>{
                                try {
                                    var httpResult = axios({
                                        method: "POST",
                                        url: 'http://localhost:8080/railspot-1.0/routes/buy?start=' + this.props.station1
                                            + '&end='+ this.props.station2 + '&cant=' + this.props.quantity +'&date=' +
                                            this.props.date + '&id=' + this.props.id
                                    });
                                    httpResult
                                        .then((response) => {
                                            console.log(response.status)
                                            alert('Tiquete comprado!')
                                            if(this.state.show === false){
                                                this.setState({show: !this.state.show})
                                            }
                                        })
                                        .catch(() => {
                                            alert("No fue posible comprar el tiquete")
                                        });
                                } catch (error) {
                                    console.log("La tearea falló con éxito: " + error)
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
                                quantity = {this.props.quantity} date = {this.props.date} id = {this.props.id}
                                price = {this.props.price} troughStations = {this.state.troughStations}/>
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