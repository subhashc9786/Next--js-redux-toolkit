"use client"
import React from 'react'
import { removeUser } from '../redux/slice';
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const userData = useSelector((data) => data.users);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Remove User</h1>
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
        </div>
    )
}

export default page
