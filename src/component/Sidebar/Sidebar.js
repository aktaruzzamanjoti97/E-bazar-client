import React from "react";
// import './Sidebar.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlusSquare, faTasks } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="mt-5">
      <div class="d-flex" id="wrapper">
        <div class="bg-light border-right" id="sidebar-wrapper">
          
          <div class="list-group list-group-flush">
            <Link to="/manage" class="list-group-item list-group-item-action bg-light">
            <FontAwesomeIcon style={{color: 'green'}} icon={faTasks} />  <span style={{fontWeight: '700', fontSize:'20px'}}>Manage Products</span>
            </Link>
            <Link to="/admin" class="list-group-item list-group-item-action bg-light">
            <FontAwesomeIcon style={{color: 'red'}} icon={faPlusSquare} />  <span style={{fontWeight: '700', fontSize:'20px'}}>Add Products</span>
            </Link>
            <Link href="#" class="list-group-item list-group-item-action bg-light">
            <FontAwesomeIcon style={{color: 'lightsalmon'}} icon={faEdit} />  <span style={{fontWeight: '700', fontSize:'20px'}}>Edit Products</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
