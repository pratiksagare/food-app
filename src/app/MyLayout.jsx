"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurants } from "@/lib/store/slices/restaurantSlice";
import Card from "@/components/Card";
import SkeletonCardContainer from "@/components/SkeletonCardConatiner";

const MyLayout = () => {
    const dispatch = useDispatch();
    const restoData = useSelector((state) => state.restaurant.restaurants);
    const fetchRestaurants = async () => {
        try {
            console.log("Fetching restaurants...");
            const response = await axios.get("/api/getAllRestoData");
            dispatch(setRestaurants(response.data));
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    };
    useEffect(() => {
        console.log('MyLayout is mounted');
        fetchRestaurants();
    }, [])

    if (restoData.length === 0) {
        return <SkeletonCardContainer />;
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-4 gap-4">
            {restoData.map((resto) => (
                <Card resto={resto} key={resto.restoId} />
            ))}
        </div>
    )
}

export default MyLayout
