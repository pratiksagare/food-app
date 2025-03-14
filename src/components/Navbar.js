"use client"
import Link from 'next/link';
import { BsBagPlus } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { BiDish, BiSolidDish } from "react-icons/bi";
import React, { useState, useRef, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Container from './Container';
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchM, setShowSearchM] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const searchQueryMobileRef = useRef(null);
    const cartItems = useSelector(state => state.cart);

    const handleSearch = (e) => {
        setSearchQuery(prev => e.target.value);
    }
    const handleMobiileSearch = (e) => {
        setSearchQuery(prev => e.target.value);
    }
    const handleDisplayMobileSerach = () => {
        setShowSearchM(prev => !prev);
    }

    // Focus on mobile search input when it becomes visible
    useEffect(() => {
        if (showSearchM && searchQueryMobileRef.current) {
            searchQueryMobileRef.current.focus();
        }
    }, [showSearchM]);

    useEffect(() => {
        let cartCnt = 0;
        if (Array.isArray(cartItems)) {
            cartItems.forEach((item) => {
                cartCnt += item.count;
            })
            setCartCount(cartCnt);
        }
    }, [cartItems])
    return (
        <Container>
            <div className='border-b-[1px] border-b-black '>
                <div className='flex justify-between items-center  pt-2 pb-3 border-b-[1px]'>
                    <Link href={'/'} className='font-medium text-[1.5rem] select-none font-gilroyBold text-[#FF5200]'><BiDish size={50} /></Link>
                    <div className='flex gap-5 items-center'>
                        <div className='sm:flex items-center border-b-[0.5px] border-b-black  px-2 hidden'>
                            <IoSearchOutline size={20} />
                            <input
                                type='text'
                                value={searchQuery}
                                onChange={handleSearch}
                                placeholder="Search"
                                className='ml-2 outline-none  dark:bg-[0a0a0ae1] border-none py-1 px-0.5'
                            />
                        </div>
                        <span onClick={handleDisplayMobileSerach} className='font-normal sm:hidden flex cursor-pointer'><IoSearchOutline size={25} /></span>
                        <Link href={"/cart"} className='font-normal font-gilroyMedium bg-[#FF5200] text-white rounded-2xl flex justify-center items-center gap-3 px-2 py-1.5'>
                            <span><BsBagPlus size={25} /></span>
                            <span>{cartCount}</span>
                        </Link>
                        <Link href={"/profile"} className='font-normal'>{session ? <img src={session.user.image} className='rounded-full' alt={session.user.name} width={25} /> : <CgProfile size={25} />}</Link>
                    </div>
                </div>
                {showSearchM && <input value={searchQuery} ref={searchQueryMobileRef} onChange={(e) => handleMobiileSearch(e)} className=' w-full border-b-[1px] sm:hidden flex px-2 outline-none bg-white border-none py-1  mt-2' placeholder='Search' />}
            </div>
        </Container>
    );
}

export default Navbar;
