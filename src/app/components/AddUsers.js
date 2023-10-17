"use client"
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slice';
import Link from 'next/link';

const AddUsers = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const userDispatch = () => {
        dispatch(addUser(name));
    }

    return (
        <div className='add-user'>
            <h3>User List</h3>
            <input className='add-user-input' onChange={(e) => setName(e.target.value)} type='text' placeholder='Add New User' />
            <button className='add-user-btn' onClick={userDispatch}>Add User</button>
            <Link href='/removeuser'>Remove User</Link>
        </div>

    )
}

export default AddUsers