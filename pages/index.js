import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { H1, H2, H3, P } from '../components/Text'
import Button from '../components/Button'
import ContainerWithMaxWidth from '../components/ContainerWithMaxWidth'

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

const TitleSection = styled.div`
  text-align: center;
  width: 100%;
`

const StyledP = styled(P)`
  color: #666666;
`

const StyledH2 = styled(H2)`
  color: #333333;
`

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SectionImage = styled.div`
  margin-top: 80px;
  width: 100%;
  text-align: center;
`

const WhySmartContractImage = styled.img`
  width: 500px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CircularImg = styled.img`
  width: 50px;
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
    <ContainerWithMaxWidth background={'#F2F2F2'}>
      <TitleSection>
        <StyledH2>
          我们重新定义编程教育
        </StyledH2>
      </TitleSection>
      <ContentSection>
        <StyledP>
          新生大学线上全栈营由两岸知名的 Rails 教练郑伊廷、天使投资人李笑来共同主持。我们以认知心理学为基石，打破过去传统刻板的编程学习、培训途径，旨在为未来培养出一批能够快速贯通编程理念并灵活实践的全栈工程师。
        </StyledP>
      </ContentSection>
      <SectionImage>
        <WhySmartContractImage src="/static/why.jpg"/>
      </SectionImage>
    </ContainerWithMaxWidth>
    <ContainerWithMaxWidth background="#FFFFFF">
      <TitleSection>
        這格教程內你可以
      </TitleSection>
      <ContentSection>
        {
          [
            {
              img: '/static/feature1.png',
              title: '教材简明易懂',
              content: '专业术语太多？全英文看不懂？我们总结多年的线下教育经验编写了通俗易懂的教材，帮你降低学习门槛。',
            },
            {
              img: '/static/feature1.png',
              title: '教材简明易懂',
              content: '专业术语太多？全英文看不懂？我们总结多年的线下教育经验编写了通俗易懂的教材，帮你降低学习门槛。',
            },
            {
              img: '/static/feature1.png',
              title: '教材简明易懂',
              content: '专业术语太多？全英文看不懂？我们总结多年的线下教育经验编写了通俗易懂的教材，帮你降低学习门槛。',
            },
          ]
          .map(x => (
            <Box key={x.title}>
              <CircularImg src={x.img}/>
              <H3>{x.title}</H3>
              <P>{x.content}</P>
            </Box>
          ))
        }
      </ContentSection>
    </ContainerWithMaxWidth>
  </Layout>
)

export default IndexPage
