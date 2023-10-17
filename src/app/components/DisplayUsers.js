
"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice';

const DisplayUsers = () => {
    const userData = useSelector((data) => data.users);
    const dispatch = useDispatch();
    console.log("userData", userData);
    return (
        <div className='display-user'>
            <h3>User List</h3>
            {
                userData.map((item) => {
                    return (
                        <div key={item.id} className='user-item'>
                            <span> {item.name}</span>
                            <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default DisplayUsers