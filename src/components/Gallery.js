import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Masonry from 'react-masonry-component'
import Carousel, { Modal, ModalGateway } from "react-images";

const Gallery = ({images}) =>{
    
    const [ state, setState ] = useState({
        lightboxIsOpen: false,
        selectedIndex: 0
    })
    const { selectedIndex, lightboxIsOpen } = state;
    
    const toggleLightbox = (selectedIndex) =>{
        setState({
            lightboxIsOpen: !state.lightboxIsOpen,
            selectedIndex
        });
    }

    // work-item
    const renderGallery = (images) => {
        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="6u 12u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit thumb"
                        href={obj.source}
                        onClick={e => {
                            e.preventDefault();
                            toggleLightbox(i);
                        }}
                    >
                        <img src={obj.thumbnail.fluid.srcSet}  alt={obj.caption}/>
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                </article>
            );
        });

        return (
            <Masonry>
                {gallery}
            </Masonry>
            
        );
    }
        

    return (
        <>
            {renderGallery(images)}
            
            <ModalGateway>
                {lightboxIsOpen && (
                    <Modal onClose={toggleLightbox}>
                        <Carousel views={images[selectedIndex].source} />
                    </Modal>
                )}
            </ModalGateway>
        </>
    );
    
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    images: PropTypes.array
};

export default Gallery;