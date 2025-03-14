"use client"
import Link from 'next/link';
import { useState } from 'react'
import { MdOutlineStar } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { findRestaurant } from '@/lib/store/slices/restaurantSlice';
import { useDispatch } from 'react-redux';

const Card = ({ resto }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleImageLoad = () => {
        setIsLoading(false);
    };
    const handleSelectRestaurant = () => {
        dispatch(findRestaurant(resto.restoId));
    };


    return (
        <>
            <div onClick={handleSelectRestaurant}>
                <Link href={`restaurant/${resto.restoId}`}>
                    <div className='p-4 shadow-xl'>
                        <img
                            src={resto.restoImage}
                            className={`aspect-video object-cover rounded-lg w-full transition-opacity duration-300`}
                            alt={resto.restoId}
                            loading="lazy"
                            onLoad={handleImageLoad}
                        />
                        <div className='flex flex-col gap-1 mt-1 px-2'>
                            <span className='text-ellipsis line-clamp-1 xs:text-xl text-lg font-black font-gilroyBold' title={resto.restoName}>{resto.restoName}</span>
                            <div className='flex items-center font-gilroyMedium font-bold'>
                                <div className='flex items-center gap-2'>
                                    <span className='bg-green-600 text-white p-0.5 rounded-xl'><MdOutlineStar size={15} /></span>
                                    <span>{resto.restoRating}</span>
                                </div>
                                <div>
                                    <span className='font-black'><LuDot size={30} /></span>
                                </div>
                                <div>
                                    <span>{resto.deliveryTiming}</span>
                                </div>
                            </div>
                            <span className='text-ellipsis line-clamp-1 text-sm text-[#797C7E] font-gilroyMedium' title={resto.restoCategory}>{...resto.restoCategory}</span>
                            <span className='text-[#797C7E] text-sm font-gilroyMedium'>{resto.address.area}</span>
                        </div>
                    </div>
                </Link>

            </div>
        </>
    );
}

export default Card
