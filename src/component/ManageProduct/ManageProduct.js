import React from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageProduct = (props) => {

  const productsManage = props.manage;


    const handleDeleteProduct = (id) =>{
        fetch(`https://infinite-temple-86375.herokuapp.com/delete/${id}`,{     
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => console.log('deleted successfully'))
    }

  return (
    <div>
      <Table responsive>
        <thead>
          <tr className="text-light bg-dark">
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
        {
          productsManage.map(pd => 
            
            <tr>
              <td>{pd.name}</td>
              <td>{pd.quantity}</td>
              <td>{pd.price}</td>
              <div>
              <button className="ml-4 mt-2 mr-2">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button style={{ color: "red" }} onClick={() => handleDeleteProduct(pd._id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              </div>
            </tr>
          
            )
        }
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProduct;
