import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../avatar/avatar.component.js';
import Star from '../star/star.component.js';


const FullCard = styled.div`
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(74, 74, 74);
`;

const InfoBox = styled.div`
  color: rgb(102, 102, 102);
  text-align: left;
  margin-top: 17px;
  margin-left: 10px;
`;

const ListingCard = ({ listing }) => (
  <FullCard>
    <Avatar img={listing.avatar_image.small_url} />
    <InfoBox>
      <strong>{listing.name}</strong>
      <br/>
      <Star rating={listing.rating} />
      <span className="miles">
        {' | '}{Math.round(listing.distance)} mi
      </span>
    </InfoBox>
  </FullCard>
);

ListingCard.propTypes = {
  listing: PropTypes.object
};

ListingCard.defaultProps = {
  listings: {}
};

export default ListingCard;
