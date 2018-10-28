import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { H1, P } from '../components/Text'
import Button from '../components/Button'

const Spacer = styled.div`
  width: 100%;
  height: 100px;
`

const ColorText = styled.div`
  color: white;
`
const FullWidthBannerContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
`

const FullWidthBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/static/computer.jpg");
  background-repeat: no-repeat, repeat;
  background-position: center 80%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: opacity(0.95) brightness(50%);
`

const BannerBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const IndexPage = () => (
  <Layout>
    <FullWidthBannerContainer>
      <FullWidthBanner />
      <BannerBox>
        <H1>
          脱胎换骨成为下一个想要的自己
        </H1>
        <P>
          七年就是一辈子，一年就能蜕变成能够编织自己未来旅程的全栈工程师
        </P>
        <Spacer />
        <Button>
          立刻报名
        </Button>
        </BannerBox>
    </FullWidthBannerContainer>
  </Layout>
)

export default IndexPage
