import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  ${props => (props.background
    ? `
      background: ${props.background};
      > div {
        background: ${props.background};
      }
    ` : `
      background: transparent;
      > div {
        background: transparent;
      }
    `
  )}
  @media(max-width: 768px) {
    width: 100%;
  }
`
const PlacerHolderBlock = styled.div`
  flex: 1;
`
const Block = styled.div`
  width: 800px;
  padding: 80px 0;
`

const ContainerWithMaxWidth = props => (
  <Container background={props.background}>
    <PlacerHolderBlock />
    <Block>
      {props.children}
    </Block>
    <PlacerHolderBlock />
  </Container>
)

export default ContainerWithMaxWidth
