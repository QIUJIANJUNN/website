import React from 'react'
import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 42px;
  letter-spacing: 1px;
  color: #FFFFFF;
  margin: 10px 0 15px 0;
  @media(max-width: 768px) {
    font-size: 50px;
  }
`

export const H2 = styled.h2`
  font-size: 36px;
  letter-spacing: 3px;
  color: #FFFFFF;
  margin: 10px 0 15px 0;
  @media(max-width: 768px) {
    font-size: 45px;
  }
`

export const H3 = styled.h3`
  font-size: 30px;
  letter-spacing: 3px;
  color: #FFFFFF;
  margin: 10px 0;
  @media(max-width: 768px) {
    font-size: 42px;
  }
`

export const H4 = styled.h4`
  font-size: 24px;
  letter-spacing: 3px;
  color: #FFFFFF;
  margin: 10px 0;
  @media(max-width: 768px) {
    font-size: 40px;
  }
`

export const P = styled.p`
  font-size: 16px;
  letter-spacing: 1.3px;
  color: #FFFFFF;
  margin: 5px 0;
  line-height: 34px;
  @media(max-width: 768px) {
    font-size: 36px;
  }
`
