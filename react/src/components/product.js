
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    const setToken = useState('');
    const history = useHistory();

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }
    return (
        <div className="container mt-5">
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Dashboard
