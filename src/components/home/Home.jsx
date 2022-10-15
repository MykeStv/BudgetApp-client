import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Transactions from '../transaction/Transactions'
import Dashboard from '../dashboard/Dashboard'

//Will contain the main components as header, footer and sub elements
const Home = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='header'>
                    <h1 className='header_logo'>Budget</h1>
                </div>

                <div className='navbar'>
                    <ul className='list'>
                        <NavLink to={'/dashboard'} className='navlink'>
                            Dashboard
                        </NavLink>
                        <br />
                        <NavLink to={'/transactions'} className='navlink'>
                            Transactions
                        </NavLink>
                    </ul>
                </div>
            </div>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='transactions' element={<Transactions />} />
            </Routes>

        </>
    )
}

export default Home