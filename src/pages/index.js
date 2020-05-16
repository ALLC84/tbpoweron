import React from 'react'
// import Lightbox from 'react-images'
/*
|-------------------------------------------
| IMPORTS COMPONENTS
|-------------------------------------------
*/
import {Layout} from '@components/layout'
import SEO from "@components/seo";
import { Header } from '@components/header'
import Gallery from '@components/Gallery'
import {About} from '@components/about'
import {ContactFooter} from '@components/contact-footer'
// import {MainFooter} from '@components/main-footer'

/*
|-------------------------------------------
| IMPORTS HOOKS
|-------------------------------------------
*/
import { useSiteMetadata } from '@hooks/site-metadata'
import { useGalleryData } from '@hooks/gallery-data-cms'
import { useOfferData } from '@hooks/offer-data-cms'

// MAIN COMPONENT
export const HomeIndex = () => {
        const {description} = useSiteMetadata()
        const datoCmsOffer = useOfferData()
        const data = useGalleryData()

        return (
            <Layout>
                <SEO 
                    title={'Electricity'}
                    description={description} 
                />

                <div id="main">

                    {/* Offer Message */}
                    {   datoCmsOffer && datoCmsOffer.message &&
                        <div id="offers">
                            <div className="icon fa-bell offers_icon-message"></div>
                            <h3>{datoCmsOffer.message}</h3>
                        </div>
                    }


                    {/* INTRO */}
                    <header id="one">
                        <Header />
                    </header>


                    {/* GALERIA DE TRABAJOS RECIENTES */}
                    <main id="two">
                        <h2>Recent works</h2>
                        <Gallery images={data.map(({node: { id, source, thumbnail, caption, description }}) => ({
                            source: source.map(item => {return {source: item.fluid.srcSet}}),
                            thumbnail,
                            caption,
                            description
                        }))} />
                    </main>


                    {/* ABOUT */}
                    <About />


                    {/* MAIN FOOTER */}
                    <footer id="three" >
                        {/* <MainFooter /> */}
                        <ContactFooter />
                    </footer>
                </div>
            </Layout>
        )
    
}

export default HomeIndex