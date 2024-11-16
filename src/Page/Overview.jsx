import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';

const Overview = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <h1> wellCome Back {user.email}</h1>
        </div>
    );
};

export default Overview;