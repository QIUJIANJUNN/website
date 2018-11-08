import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  H4,
} from './Text'

const CardWrapper = styled.div`
  width: 600px;
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
  padding: 30px;
  @media(max-width: 768px) {
    width: 100%;
  }
`

const StyledTitleText = styled(H4)`
  color: gray;
  margin-bottom: 40px;
`
const StyledContentText = styled(H4)`
  color: white;
  margin-bottom: 20px;
`
const Img = styled.img`
  width: 100%;
  margin: 10px 0;
  filter: brightness(150%);
  border: 1px solid rgba(255,255,255, 0.1);
`

const Card = ({ title, items, images }) => (
  <CardWrapper>
    <StyledTitleText>{title}</StyledTitleText>
    {/* eslint-disable */}
    {images && images.map((image, imageIndex) => (
      <Img key={`${imageIndex}-img`} src={image} />
    ))}
    {items.map((item, itemIndex) => (
      <StyledContentText key={`${itemIndex}-styled-title`}> {/* eslint-disable-line */}
        -{item}
      </StyledContentText>
    ))}
  </CardWrapper>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired, // eslint-disable-line
  images: PropTypes.array, // eslint-disable-line
}

export default Card
