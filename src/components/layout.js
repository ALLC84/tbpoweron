import React from 'react'
import '@assets/scss/main.scss'

import { Sidebar } from '@components/sidebar'

export const Layout = ({children}) => {

    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )
}

