import React from 'react'
// import Veg from '@/../..public/veg.png';
// import NonVeg from '@/../..public/nonVeg.png';
import { MdOutlineStar } from 'react-icons/md';
import Image from 'next/image';
import { LuDot } from 'react-icons/lu';
import { addItem, incrementCount, decrementCount } from '@/lib/store/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const RestoCard = ({ dish }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart)
    const cartList = () => {
        return cartItems.find((item) => item.dishId === dish.dishId);
    }
    const handleAddToCart = () => {
        dispatch(addItem(dish));
    }
    const handleIncreaseCount = () => {
        dispatch(incrementCount(dish.dishId));
    }

    const handleDecreamentCount = () => {
        dispatch(decrementCount(dish.dishId))
    }
    return (
        <div className='flex justify-between w-full shadow-md border-red-600 p-2'>
            <div className='w-full'>
                {/* {dish?.isVeg && <Image src={Veg} alt="veg" width={15} height={15} />}
                {dish?.isNonVeg && <Image src={NonVeg} alt="nonVeg" width={15} height={15} />} */}
                <div className='flex flex-col py-1 md:py-3 w-full gap-1 md:gap-3'>
                    <span className='font-gilroyBold text-xs sm:text-sm  lg:text-lg xl:text-xl line-clamp-2 sm:line-clamp-1 text-ellipsis '>{dish.dishName}</span>
                    <div className='flex items-center gap-0.5'>
                        <div className='flex items-center'>
                            <span className='font-gilroyMedium text-xs sm:text-sm font-bold text-nowrap'>₹ {dish.price}</span>
                        </div>
                        <div className='flex items-center sm:hidden'>
                            <span className='font-black'><LuDot size={30} /></span>
                        </div>
                        <div className='flex items-center gap-2 sm:hidden'>
                            <div className='flex justify-center items-center bg-green-600 p-0.5 rounded-xl'>
                                <span className=' text-white '><MdOutlineStar size={8} /></span>
                            </div>
                            <span className='font-gilroyMedium text-xs sm:text-sm font-bold leading-none'>{dish.dishRating}</span>
                        </div>
                    </div>
                    <div className='sm:flex sm:items-center gap-2 hidden'>
                        <div className='flex justify-center items-center bg-green-600 p-0.5 rounded-xl'>
                            <span className=' text-white '><MdOutlineStar size={8} /></span>
                        </div>
                        <span className='font-gilroyMedium text-xs sm:text-sm font-bold leading-none'>{dish.dishRating}</span>
                    </div>
                    <span className='text-[#797C7E] font-gilroyMedium text-xs sm:text-sm line-clamp-2 text-ellipsis'>{dish.content}</span>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center pl-3'>
                <div className='max-w-[400px] md:w-[200px] sm:w-[150px] xs:w-[125px] w-[80%] aspect-[4/3] relative'>
                    <Image src={dish.dishImage} className='object-cover' fill alt='dish-image' />
                </div>
                {!cartList() ? (
                    <button
                        onClick={handleAddToCart}
                        className='px-2 py-1 mt-2 bg-[#FF5200] rounded-xl w-full text-white font-gilroyMedium text-nowrap text-sm sm:text-lg'>
                        Add to Cart
                    </button>
                ) : (
                    <div className='flex items-center gap-2 mt-2'>
                        <button className='px-2 py-1 bg-red-600 text-white rounded' onClick={handleDecreamentCount}>-</button>
                        <span>{cartList().count || 1}</span>
                        <button className='px-2 py-1 bg-green-600 text-white rounded' onClick={handleIncreaseCount}>+</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RestoCard

{/* className="w-full h-auto sm:max-w-xs md:max-w-sm lg:max-w-xs" layout="responsive" width={100} height={100}  */ }