import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './CheckOut.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import moment from 'moment';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'

const Checkout = () => {

    const {productId} = useParams();
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [oneProduct, setOneProduct] = useState({productId});
    const [checkOut, setCheckOut] = useState({});
    const orderDate = moment();

    // const order = {...loggedInUser, ...oneProduct};


    useEffect(() => {
        fetch(`https://infinite-temple-86375.herokuapp.com/orders/${productId}`)
        .then(res => res.json())
        .then(data => setCheckOut(data[0]))
    }, [])

    const handleCheckOut = () => {
        const orderData = {
            name: checkOut.name,
            price: checkOut.price,
            quantity: checkOut.quantity,
            user: loggedInUser.displayName,
            userEmail: loggedInUser.email,
            orderDate: orderDate
        }

            fetch('https://infinite-temple-86375.herokuapp.com/productsByOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
            .then(res => console.log('Data stored successfully', res));
    }


    return (
        <div>      
            <Container>
                <h3 className="section-heading bg-dark text-center text-white"><span><FontAwesomeIcon icon={faShoppingBag} /></span> CheckOut</h3>
                <div className="table">
                    <Table responsive>
                        <thead>
                            <tr>
    
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {checkOut && (<tbody>
                            <tr>
                              
                                <td style={{fontSize:'23px', fontWeight: '600'}}>{checkOut.name}</td>
                                <td style={{color:'green'}}>{checkOut.price}</td>
                                <td style={{color:'red'}}>{checkOut.quantity}</td>
                            </tr>
                        </tbody>)}
                    </Table>
                    <button onClick={() => handleCheckOut()} className="order-btn" type="submit">Place Order</button>
                </div>
            </Container>
        </div>
    );
};

export default Checkout;