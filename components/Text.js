import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: 38px;
  letter-spacing: 1px;
  color: #FFFFFF;
  margin: 10px 0 15px 0;
  @media(max-width: 768px) {
    white-space: pre-line;
    font-size: 35px;
    text-align: center;
  }
`

export const H2 = styled.h2`
  font-size: 34px;
  letter-spacing: 3px;
  color: #FFFFFF;
  margin: 10px 0 15px 0;
  @media(max-width: 768px) {
    font-size: 24px;
  }
`

export const H3 = styled.h3`
  font-size: 28px;
  letter-spacing: 3px;
  color: #FFFFFF;
  margin: 10px 0;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`

export const H4 = styled.h4`
  font-size: 24px;
  letter-spacing: 3px;
  color: #FFFFFF;
  margin: 10px 0;
  @media(max-width: 768px) {
    font-size: 18px;
  }
`

export const P = styled.p`
  font-size: 22px;
  letter-spacing: 1.3px;
  color: #FFFFFF;
  margin: 5px 0;
  line-height: 34px;
  @media(max-width: 768px) {
    white-space: pre-line;
    font-size: 16px;
    text-align: center;
  }
`
