import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GridGifItem } from './GridGifItem';

export const GifGrid = ({ category }) => {

    //const api_key = 'eeC1uNZdpD13d8pZ2YJ7okw4MHmntByj';
    const { data: images, loading } = useFetchGif( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                    { 
                        images.map( img => (
                            <GridGifItem 
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }
            </div>
        </>    
    )
}
