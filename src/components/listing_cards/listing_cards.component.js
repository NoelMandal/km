import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListingCard from '../listing_card/listing_card.component';

const AppListingCardWrapper = styled.div`
   margin: 10px 0 0 0;
`;

const ListingCards = ({ listings }) => (
  <div>
    {listings.map(listing => (
      <AppListingCardWrapper key={listing.id}>
        <ListingCard listing={listing} />
      </AppListingCardWrapper>
    ))}
  </div>);

ListingCards.propTypes = {
  listings: PropTypes.array
};

ListingCards.defaultProps = {
  listings: []
};

export default ListingCards;
