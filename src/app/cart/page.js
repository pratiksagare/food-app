"use client"
import { emptyCart } from '@/lib/store/slices/cartSlice';
import { useSession } from 'next-auth/react';
import RestoCard from '@/components/RestoCard';
// import RestoCard from '@/components/RestoCard'
import { useMemo } from 'react';
import { BsCartX } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
    const session = useSession();
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const handlePlaceOrder = () => {
        if (session.data?.user) {
            alert('Order placed successfully!');
            // Perform any order placement logic here
            dispatch(emptyCart());
        } else {
            alert('Please sign in to place an order.');
        }
    };

    // Recalculate total when cartItems or any count within cartItems changes
    const total = useMemo(() => {
        if (Array.isArray(cartItems)) {
            return cartItems.reduce((acc, item) => acc + item.price * item.count, 0);
        }
        return 0;
    }, [cartItems]);
    return (
        <>
            {
                cartItems.length == 0 && <div className='flex flex-col items-center justify-center opacity-70 font-gilroyMedium h-[80vh] gap-3'>
                    <BsCartX size={60} />
                    <span className=''>Cart is Empty!!!</span>
                </div>
            }
            <div className='mt-4'>
                {cartItems.length > 0 &&
                    <div className='flex flex-col gap-4'>
                        <span className='text-sm sm:text-lg text-[#FF5200] font-gilroyMedium pl-2'>Cart</span>
                        <>
                            <div>
                                {
                                    cartItems.map((dish) => {
                                        return <RestoCard dish={dish} key={dish.dishId} />
                                    })
                                }
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col text-[#797C7E] font-gilroyMedium text-xs sm:text-sm'>
                                    <div className='flex justify-between'>
                                        <span className=''>
                                            Total :
                                        </span>
                                        <span className=''>
                                            ₹ {total}
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className=''>
                                            Delivery Charges
                                        </span>
                                        <span className=''>
                                            ₹ 50.0
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className=''>
                                            Discount
                                        </span>
                                        <span className=''>
                                            ₹ 99.0
                                        </span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className=''>
                                            Total Payable
                                        </span>
                                        <span className="">
                                            ₹ {Math.floor(total + 50.0 - 90.0)}
                                        </span>

                                    </div>
                                </div>
                                <button type='button' onClick={handlePlaceOrder} className='bg-[#FF5200] text-white py-2 text-sm font-gilroyMedium rounded-lg'>Place Order</button>
                            </div>
                        </>
                    </div>
                }
            </div>
        </>
    )
}

export default page
