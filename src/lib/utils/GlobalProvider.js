"use client"
import { Provider } from 'react-redux'
import { store } from '@/lib/store/store'
import { SessionProvider } from 'next-auth/react'

const GlobalProvider = ({ children }) => {
    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>
    )
}

export default GlobalProvider
