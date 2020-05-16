import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from '@static/favicon.ico';

/*
|-------------------------------------------
| IMPORTS HOOKS
|-------------------------------------------
 */
import { useSiteMetadata } from "@hooks/site-metadata";

const SEO = ({ description, lang, meta, keywords, title }) => {
  const siteMetadata = useSiteMetadata();
  const metaDescription = description || siteMetadata.description;
  
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
      ]}
    >
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  keywords: [
    'company','electric','tbpoweron', 'tampa bay', 'power', 'entrerprise', 'electrical', 'corp', 'services'
  ]
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string
};

export default SEO;
