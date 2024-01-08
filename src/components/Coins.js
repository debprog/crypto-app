import React from 'react'
import Coinitem from './Coinitem'
import { Link } from 'react-router-dom'
import ThisCoin from './pages/ThisCoin'
const Coins = (props) => {
    return (
        <div className='text-white max-w-screen-lg m-auto mt-3'>
            <div >
                <div className='flex justify-between p-6 item-center shadow-lg bg-gray-900  m-0  rounded-md m-2rem mr-1rem my-2rem mx-1rem font-bold'>
                    <p>#</p>
                    <p className='ml--8'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hidden md:block lg:block'>Volume</p>
                    <p className='hidden md:block lg:block'>Mkt cap</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} key={coins.id}>
                            <Coinitem coins={coins} />
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default Coins
