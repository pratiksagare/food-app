const SkeletonCard = () => {
    return (
        <div className="p-4 shadow-xl animate-pulse">
            <div className="aspect-video rounded-lg w-full h-auto bg-gray-200"></div>
            <div className="flex flex-col gap-1 mt-1 px-2">
                <div className="text-ellipsis line-clamp-1 text-xl h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="flex items-center">
                    <div className='flex items-center gap-2'>
                        <div className='h-4 w-4 bg-gray-200 rounded'></div>
                        <div className='h-4 w-4 bg-gray-200 rounded'></div>
                    </div>
                    <div className='h-4 w-4 bg-gray-200 rounded'></div>
                    <div className='h-4 w-4 bg-gray-200 rounded'></div>
                </div>
                <div className="text-ellipsis line-clamp-1 text-md h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
        </div>
    )
}

export default SkeletonCard
