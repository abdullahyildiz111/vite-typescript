import React, { useState } from 'react'
import './User.css'

export interface UserInterface {
    name: string;
    age?: string;
    job: string;
    deleteUser: () => void
}
const User: React.FC<UserInterface> = ({ name, job, age, deleteUser }) => {






    return (
        <div className="card">

            <div className="row">
                <h3>Name:</h3>
                <p>{name}</p>
            </div>
            <hr />
            <div className="row">
                <h3>Job:</h3>
                <p>{job}</p>
            </div>
            <hr />
            {age && <><div className="row">
                <h3>Age:</h3>
                <p>{age}</p>
            </div>
                <hr />
            </>
            }

            <button className='deleteBtn' onClick={() => { deleteUser() }}>delete</button>
        </div>
    )
}

export default User
