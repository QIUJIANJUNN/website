import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
  width: 300px;
  margin: 5px 0;
  color: #FFFFFF;
  background: transparent;
  border: solid 0.5px #FFFFFF;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 4px;
  cursor: pointer;
  opacity: 0.9;
  transition: all 0.2s ease-in-out;
  font-size: 25px;
  padding: 5px;
  &:hover {
    opacity: 1;
    color: #ff9a00;
    border: solid 0.5px #ff9a00;
  }
`

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>
    {children}
  </StyledButton>
)

export default Button
