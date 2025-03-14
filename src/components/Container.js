import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='flex items-center justify-center'>
            <div className=' w-full max-w-[1200px] h-full  border-red-600 px-6 xl:px-0'>
                {children}
            </div>
        </div>
    )
}

export default Container
