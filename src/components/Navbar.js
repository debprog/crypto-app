import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <Link to='/'>
            <div className='flex justify-center items-center mt-2 '>
                <FaCoins className='text-5xl text-purple-600' />
                <h1 className='font-bold text-2xl text-white '>Coin <span className='text-purple-600'>Search</span></h1>
            </div>

        </Link>
    )
}

export default Navbar
