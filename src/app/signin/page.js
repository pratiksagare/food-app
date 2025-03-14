"use client";
import { setCart } from "@/lib/store/slices/cartSlice";
import { signIn } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        // Store cart items before sign-in
        localStorage.setItem("cart", JSON.stringify(cartItems));
        console.log("Cart items stored in localStorage: ", cartItems);
        await signIn("github");

        // Retrieve and update Redux state correctly
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        console.log("Cart items retrieved from localStorage: ", storedCart);
        dispatch(setCart(storedCart));

        // Clear cart from localStorage after updating Redux
        localStorage.removeItem("cart");
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  );
};

export default Page;