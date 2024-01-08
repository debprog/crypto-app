import React from 'react'

const Coinitem = (props) => {
    return (
        <div className='flex justify-between item-center shadow-lg box-gray-900 bg-gray-900 p-6 m-0  rounded-md m-2rem mr-1rem my-2rem mx-1rem font-bold mt-3 transform hover:scale-110 transition-transform duration-100 cursor-pointer'>
            <p >{props.coins.market_cap_rank}</p>
            <div className='flex item-center'>
                <img src={props.coins.image} alt='' className='h-7 mr-8 w-auto' />
                <p className='uppercase'>{props.coins.symbol}</p>
            </div>
            <p>₹{props.coins.current_price.toLocaleString()}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hidden md:block lg:block'>₹{props.coins.total_volume.toLocaleString()}</p>
            <p className='hidden md:block lg:block'>₹{props.coins.market_cap.toLocaleString()}</p>
        </div>
    )
}

export default Coinitem
