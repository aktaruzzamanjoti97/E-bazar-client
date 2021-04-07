import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import Sidebar from '../Sidebar/Sidebar';

const Manage = () => {

    const [manage, setManage] = useState([])

    useEffect(() =>{
        fetch('https://infinite-temple-86375.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setManage(data))
    }, [manage])

    return (
        <div className="row">
            <div className="col-md-4">
                <Sidebar />
            </div>
            <div className="col-md-8">
                {/* {
                    manage.map(product => <ManageProduct product={product} />)
                } */}
                <ManageProduct manage={manage} /> 
            </div>
        </div>
    );
};

export default Manage;