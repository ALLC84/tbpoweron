import React from 'react'
/*
|-------------------------------------------
| IMPORTS COMPONENTS
|-------------------------------------------
*/
import {FooterSidebar} from '@components/footer-sidebar'
// import logo from '@images/logo.png'

/*
|-------------------------------------------
| IMPORTS HOOKS
|-------------------------------------------
*/
// import { useSiteMetadata } from '@hooks/site-metadata'

export const Sidebar = () => {
    // const {author} = useSiteMetadata()

    return (
        <section id="sidebar">
            <div className="inner">
               {/* <div className="image avatar sidebar">
                    <img src={logo} alt="Logo TB Poweron" />
                </div> *
                <h1>
                    <strong> { author },</strong> <br/>
                    TB Poweron <br />
                    Professional electrician. <br />
                </h1> */}
            </div> 
            <FooterSidebar />
        </section>
    )
}