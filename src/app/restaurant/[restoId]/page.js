"use client";
import { findRestaurant, setRestaurants } from "@/lib/store/slices/restaurantSlice";
import RestoCard from '@/components/RestoCard';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import axios from 'axios';

const RestaurantPage = () => {
    const dispatch = useDispatch();
    const [isClient, setIsClient] = useState(false);
    const params = useParams();
    const restoId = params?.restoId;

    const selectedRestaurant = useSelector(state => state.restaurant.selectedRestaurant);
    const restaurants = useSelector(state => state.restaurant.restaurants);

    useEffect(() => {
        setIsClient(true); // Ensures the component renders only on the client
    }, []);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                console.log("Fetching restaurants...");
                const response = await axios.get("/api/getAllRestoData");
                dispatch(setRestaurants(response.data));
            } catch (error) {
                console.error("Error fetching restaurant data:", error);
            }
        };

        if (!restaurants.length) {
            fetchRestaurants();
        }
    }, [restaurants.length, dispatch]);

    useEffect(() => {
        if (restoId && restaurants.length) {
            dispatch(findRestaurant(restoId));
        }
    }, [restoId, restaurants, dispatch]);

    if (!isClient) return null;

    if (!restaurants.length || !selectedRestaurant) {
        return (
            <div className="flex justify-center items-center h-[92vh]" >
                <span className="font-gilroyBold" > Loading...</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center my-3 h-full">
            <div className="w-full max-w-[800px] h-screen px-2">
                <span className="text-sm sm:text-xl font-black font-gilroyBold px-2">
                    {selectedRestaurant?.restoName || "Loading..."}
                </span>
                <div className="flex flex-col gap-4 my-4">
                    {selectedRestaurant?.dishes?.map((dish) => (
                        <RestoCard dish={dish} key={dish.dishId} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantPage;
