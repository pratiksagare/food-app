"use client";

import { setCart } from "@/lib/store/slices/cartSlice";
import { signIn, signOut, useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";

const Page = () => {
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const cartItems = useSelector((state) => state.cart);


    // const cartItems = useSelector(state => state.cart);

    // const handleSignIn = async () => {

    // get copy cart to localstorage
    //     await signIn("github", { redirect: false }); // Prevent page refresh
    // get copy localstorage to cart 
    // clear local storage
    // };

    const handleSignIn = async () => {
        localStorage.setItem("cartBackup", JSON.stringify(cartItems));
        await signIn("github");
        const restoredCart = JSON.parse(localStorage.getItem("cartBackup"));
        if (restoredCart) {
            dispatch(setCart(restoredCart));
        }
        localStorage.removeItem("cartBackup");
    };

    const handleSignOut = async () => {
        await signOut({ redirect: false }); // Prevent page refresh
    };

    return (
        <div className="p-3">
            {!session ? (
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <CgProfile size={80} color="#FF5200" />
                        <span className="text-sm sm:text-lg font-gilroyMedium opacity-80">
                            Not Signed In. Please Sign In.
                        </span>
                    </div>
                    <button type="button"
                        className="px-3 py-2 bg-[#FF5200] text-white rounded-sm font-gilroyMedium"
                        onClick={handleSignIn}
                    >
                        Sign in with GitHub
                    </button>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <img
                            className="rounded-full"
                            src={session.user.image}
                            alt={session.user.name}
                            width={80}
                            loading="lazy"
                        />
                        <span className="text-sm xs:text-lg font-gilroyMedium opacity-80">
                            You are signed in as {session.user.name}.
                        </span>
                    </div>
                    <button type="button"
                        className="px-3 py-2 bg-[#FF5200] text-white rounded-sm font-gilroyMedium"
                        onClick={handleSignOut}
                    >
                        Sign out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Page;
