import { useStaticQuery, graphql } from 'gatsby';

export const useOfferData = () => {
	let {datoCmsOffer} = useStaticQuery(
		graphql`
            query OfferMessage {
                datoCmsOffer {
                    message
                }
            }
		`
    );
	return datoCmsOffer;
};
