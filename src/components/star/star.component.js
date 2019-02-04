import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StarRatings = styled.div`
  unicode-bidi: bidi-override;
  color: rgb(0, 205, 190);
  position: relative;
  margin: 0;
  padding: 0;
  display: inline-block;
`;

const FillRatings = styled.div`
    color: rgb(0, 205, 190);
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
`;

const EmptyRatings = styled.div`
    padding: 0;
    display: block;
    z-index: 0;
`;

export class Star extends Component {
  render() {
    const { rating } = this.props;
    const fRate = {
      width: `${(Math.round(((rating.toFixed(2) * 100) / 5) / 10) * 10).toString()}%`
    };
    return (
      <StarRatings>
        <FillRatings style={fRate}>
          <span>★★★★★</span>
        </FillRatings>
        <EmptyRatings>
          <span>☆☆☆☆☆</span>
        </EmptyRatings>
      </StarRatings>
    );
  }
}

Star.propTypes = {
  rating: PropTypes.number
};

Star.defaultProps = {
  rating: ''
};

export default Star;
