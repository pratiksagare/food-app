import React from 'react'
import SkeletonCard from './SkeletonCard';

const SkeletonCardConatiner = () => {
    const count = 8;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-4 gap-4'>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}

export default SkeletonCardConatiner
