"use client"
import { findRestaurant } from "@/lib/store/slices/restaurantSlice"
import RestoCard from '@/components/RestoCard';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "next/navigation";
const RestaurantPage = () => {
    const dispatch = useDispatch();
    const [isClient, setIsClient] = useState(false);
    const params = useParams();
    const restoId = params?.restoId;
    const selectedRestaurant = useSelector(state => state.restaurant.selectedRestaurant);
    const filterRestaurantById = async (restoId) => {
        try {
            dispatch(findRestaurant(restoId));
        } catch (error) {
            console.error("Error while filtering restaurant data:", error);
        }
    };
    useEffect(() => {
        setIsClient(true); // Ensure the component only renders on the client
    }, []);
    useEffect(() => {
        filterRestaurantById(restoId);
    }, [restoId]);

    if (!isClient) return null;

    if (!selectedRestaurant || Object.keys(selectedRestaurant).length === 0) {
        return (
            <div className="flex justify-center items-center h-[92vh]" >
                <span className="font-gilroyBold" > Loading...</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center my-3  border-purple-600 h-full">
            <div className="w-full max-w-[800px] h-screen px-2  border-red-600">
                <span className="text-sm sm:text-xl font-black font-gilroyBold px-2 text-nowrap text-ellipsis line-clamp-1">{selectedRestaurant.restoName}</span>
                <div className="flex flex-col gap-4 my-4">
                    {
                        selectedRestaurant && selectedRestaurant?.dishes?.map((dish) => {
                            return <RestoCard dish={dish} key={dish.dishId} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RestaurantPage
