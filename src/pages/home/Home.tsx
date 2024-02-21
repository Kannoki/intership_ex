import React, { useState } from 'react'
import { User } from '../../types/userType';

function getUser(): User | null {
    const userString = localStorage.getItem('userCredentials');
    if (userString) {
        return JSON.parse(userString);
    }
    return null;
}

const Home = () => {
    const [user, setUser] = useState(getUser())

    const handleEventLogout = () => {
        localStorage.removeItem('userCredentials');
        setUser(null)
    }
    return (
        <div>
            Home
            <br></br>
            {user ? (
                <>
                    <p>Hello {user.username}</p>
                    <br></br>
                    <button onClick={handleEventLogout}>Logout</button>
                </>
            ) : (
                <>
                    <button><a href='/login'>Go to login page</a></button>
                </>
            )}
        </div>

    )
}

export default Home