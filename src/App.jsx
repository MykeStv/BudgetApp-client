import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'

const App = () => {
    return (
        <>

            <h1>Hii :D</h1>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
            </Routes>

        </>
    )
}

export default App