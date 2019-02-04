import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border-color:rgb(102, 102, 102); 
  margin-top: 4px;
  margin-bottom: auto;
  margin-left: 10px;
`;

const Avatar = ({ img }) => (
  <div className='avatar'>
    <Icon src={img}/>
  </div>
 );

Avatar.propTypes = {
  img: PropTypes.string
};

Avatar.defaultProps = {
  img: ''
};

export default Avatar;
