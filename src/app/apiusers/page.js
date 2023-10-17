'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiUsers } from '../redux/slice';

const page = () => {
    const dispatch = useDispatch();
    const apiUserData = useSelector((data) => data.userApidata);
    console.log(apiUserData);
    return (
        <div>
            <h1>User from API</h1>
            <button onClick={() => dispatch(fetchApiUsers())}>Load Users</button>
            <div className='api-display-user'>
                <h3>User List</h3>
                {
                    apiUserData.map((item) => {
                        return (
                            <div className='api-item' key={item.id} >
                                <span className='api-user-item'>Name: {item.name}</span>
                                <span className='api-user-item'>Email:{item.email}</span>
                                <span className='api-user-item'>Phone: {item.phone}</span>
                            </div>
                        )
                    })
                }
            </div >
        </div>

    )
}

export default page