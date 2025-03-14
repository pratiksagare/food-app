"use client"
import { setCart } from "@/lib/store/slices/cartSlice";
// import { signIn } from '@/app/api/auth';

import { signIn } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        localStorage.setItem("cart", JSON.stringify(cartItems));
        await signIn("github");
        dispatch(setCart(localStorage.getItem("cart")));
        localStorage.clear();
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
}

export default page
