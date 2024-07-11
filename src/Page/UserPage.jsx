import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserPage.css';

const UserPage = () => {
    const { id } = useParams()
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
        .then(res => res.json())
        .then((data) => setUserData(data?.data))
        .catch(error => console.error('Error fetching user data:', error))
    },[id]);

    if (!userData) {
        return <div>Loading...</div>
    }

    return (
    <div className='user-details'>
    <h2>User Details</h2>
      <div>Name: {userData.employee_name}</div>
      <div>Age: {userData.employee_age}</div>
      <div>Salary: {userData.employee_salary}</div>
      <div>ID: {userData.id}</div>
    </div>
    );
};

export default UserPage;