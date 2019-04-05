import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axios-orders'
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            postalCode: '',
            street: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault()
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState({ loading: false });
                this.props.history.push('/')
            } )
            .catch( error => {
                this.setState({ loading: false});
            } );
    }
    render(){
        let form = (
            <form>
            <input className={classes.Input} type="text" placeholder="Your Name" name="name" />
            <input className={classes.Input} type="email" placeholder="Your Mail" name="email" />
            <input className={classes.Input} type="text" placeholder="Street" name="street" />
            <input className={classes.Input} type="text" placeholder="Postal Code" name="postal" />
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        )
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}
export default ContactData