import React from 'react'

/*
|-------------------------------------------
| IMPORTS HOOKS
|-------------------------------------------
*/
import { useSiteMetadata } from '@hooks/site-metadata'

export const FooterSidebar = () => {
    const {title, email, numberEC} = useSiteMetadata()
    const year = new Date().getFullYear()

    return (
        <div id="footer">
            <div className="inner">
                <ul className="icons">
                    <li>
                        <a 
                            href="https://www.instagram.com/powerenterpriseoftampabay/" 
                            rel="noopener noreferrer"
                            target="_blank"
                            className="icon fa-instagram"
                        >
                            <span className="label">Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.facebook.com/powerenterpriseoftampabay/?ref=page_internal"
                            rel="noopener noreferrer"
                            target="_blank" 
                            className="icon fa-facebook"
                        >
                            <span className="label">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${email}`} className="icon fa-envelope-o"><span className="label">Mail</span></a>
                    </li>
                    
                </ul>
                <ul className="copyright">
                    <li>{year} - &copy; {title} - {numberEC}</li>
                </ul>
            </div>
        </div>
    )
}
