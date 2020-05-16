import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
    const { site: {siteMetadata} } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        description
                        phone
                        email
                        siteUrl
                        author
                        numberEC
                    }
                }
            }
        `
    );
    return siteMetadata;
};
