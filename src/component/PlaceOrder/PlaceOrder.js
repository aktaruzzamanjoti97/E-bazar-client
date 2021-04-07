import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Button, Spinner, Table } from 'react-bootstrap';


const PlaceOrder = () => {
    const [orders, setOrders] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        const url = `https://infinite-temple-86375.herokuapp.com/placeOrders?email=${loggedInUser.email}`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div>
            {
            orders.length <= 0 ? (<div style={{height: '300px'}} className="d-flex justify-content-center align-items-center m-5">
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="warning" />
            </div>) :
             <div>
             <h3 className="section-heading"><span><FontAwesomeIcon icon={faShoppingBag} /></span> Show Your Order</h3>
                 <div className="table">
                     <Table responsive>
                         <thead>
                             <tr className="bg-warning">
                                 <th>Description</th>
                                 <th>Quantity</th>
                                 <th>Price</th>
                                 <th>Shipping Email</th>
                                 <th>Date</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 orders.map(od => 
                                 <tr>
                                     <td style={{fontSize: '20px', fontWeight: '600'}}>{od.name}</td>
                                     <td>{od.price}</td>
                                     <td>{od.quantity}</td>
                                     <td className="text-success">{od.userEmail}</td>
                                     <td className="text-danger">{od.orderDate}</td>
                                 </tr> 
                                 )
                             }
                         </tbody>
                     </Table>
                     <Button variant="info" className="text-center">Confirm your order</Button>
                 </div>
             </div>
        }
           
        </div>
    );
};

export default PlaceOrder;