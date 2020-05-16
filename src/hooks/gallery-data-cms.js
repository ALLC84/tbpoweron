import { useStaticQuery, graphql } from "gatsby";

export const useGalleryData = () => {
    const {allDatoCmsGallery: {edges}} = useStaticQuery(
        graphql`
            query {
                allDatoCmsGallery {
                    edges {
                        node {
                            caption
                            id
                            description
                            source {
                                fluid {
                                    ...GatsbyDatoCmsFluid
                                }
                            }
                            thumbnail {
                                fluid {
                                    ...GatsbyDatoCmsFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    return edges;
};

// fluid {
//     ...GatsbyDatoCmsFluid
// }

// fixed(width: 240) {
//     src
// }
