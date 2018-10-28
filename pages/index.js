import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const ColorText = styled.div`
  color: white;
`

const IndexPage = () => (
  <Layout>
    <ColorText>
      This is color
    </ColorText>
  </Layout>
)

export default IndexPage
