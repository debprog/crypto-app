import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom';
import DOMpurify from 'dompurify'
import './ThisCoin.css'

const ThisCoin = () => {
    const params = useParams()
    const [coins, setCoins] = useState({})
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data)

        }).catch((error) => {
            console.log(error)
        }
        )
    }, []
    )
    return (
        <div >
            <div className="coin-container">
                <div className="content">
                    <h1 className='text-white font-extrabold'>{coins.name}</h1>
                    <div className="content">
                        <div className="rank">
                            <span className="rank-btn text-white font-extrabold ">Rank #{coins.market_cap_rank}</span>
                        </div>
                        <div className="info">
                            <div className="coin-heading">
                                {coins.image ? <img src={coins.image.small} alt=''></img> : null}
                                <p className='text-white font-extrabold mx-2'>{coins.name}</p>
                                <p className='text-white font-extrabold'>{coins.symbol}</p>
                            </div>
                            <div className="coin-price text-white font-extrabold">
                                {coins.market_data?.current_price ? <h1>₹{coins.market_data.current_price.inr.toLocaleString()}</h1> : null}

                            </div>
                        </div>
                    </div>
                    <div className="rank">
                        <table className='w-full'>
                            <thead>
                                <tr>
                                    <th className='text-white font-extrabold'>1h</th>
                                    <th className='text-white font-extrabold'>24h</th>
                                    <th className='text-white font-extrabold'>7d</th>
                                    <th className='text-white font-extrabold'>14d</th>
                                    <th className='text-white font-extrabold'>30d</th>
                                    <th className='text-white font-extrabold'>1yr</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-white'>{coins.market_data?.price_change_percentage_1h_in_currency ? coins.market_data.price_change_percentage_1h_in_currency.inr : null}</td>
                                    <td className='text-white'>{coins.market_data?.price_change_percentage_1h_in_currency ? coins.market_data.price_change_percentage_1h_in_currency.inr : null}</td>
                                    <td className='text-white'>{coins.market_data?.price_change_percentage_24h_in_currency ? coins.market_data.price_change_percentage_24h_in_currency.inr : null}</td>
                                    <td className='text-white'>{coins.market_data?.price_change_percentage_7d_in_currency ? coins.market_data.price_change_percentage_7d_in_currency.inr : null}</td>
                                    <td className='text-white'>{coins.market_data?.price_change_percentage_30d_in_currency ? coins.market_data.price_change_percentage_30d_in_currency.inr : null}</td>
                                    <td className='text-white'>{coins.market_data?.price_change_percentage_1yr_in_currency ? coins.market_data.price_change_percentage_1yr_in_currency.inr : null}</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="rank">
                        <div className="stats">
                            <div className="left">
                                <div className="row">
                                    <h4 className='text-white font-extrabold' >24 hour low</h4>
                                    {coins.market_data?.low_24h ? <p>{coins.market_data.low_24h.inr}</p> : null}
                                </div>
                                <div className="row">
                                    <h4 className='text-white font-extrabold'>24 hour high</h4>

                                    {coins.market_data?.high_24h ? <p>{coins.market_data.high_24h.inr}</p> : null}
                                </div>

                            </div>
                            <div className="right">
                                <div className="row">
                                    <h4 className='text-white font-extrabold'>Market Cap</h4>
                                    {coins.market_data?.market_cap ? <p>{coins.market_data.market_cap.inr}</p> : null}

                                </div>
                                <div className="row">
                                    <h4 className='text-white font-extrabold'>Circulating Supply</h4>
                                    {coins.market_data ? <p>{coins.market_data.circulating_supply}</p> : null}

                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="about">
                            <h3 className='text-white font-extrabold'>About</h3>
                            <p dangerouslySetInnerHTML={{
                                __html: DOMpurify.sanitize(coins.description ? coins.description.en : '').replace(/<a/g, '<a style="text-decoration: underline;"')
                            }}></p>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ThisCoin;
