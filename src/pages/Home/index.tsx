import React from 'react'
import { useDispatch } from 'react-redux'
import { signOut } from '../Login/authSlice'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignOut = () => {
        dispatch(signOut())
        navigate("/login")
    }
    return (
        <>
            <div>HomePage</div>
            <button onClick={handleSignOut}>Sign out</button>
        </>

    )
}

export default HomePage