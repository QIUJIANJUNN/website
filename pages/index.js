import React from 'react'
import styled from 'styled-components'
import fetch from 'node-fetch'
import emailValidator from 'email-validator'
import Layout from '../components/Layout'
import Card from '../components/Card'
import {
  H1, H2, H3, P,
} from '../components/Text'
import Input from '../components/Input'
import Button from '../components/Button'
import ContainerWithMaxWidth from '../components/ContainerWithMaxWidth'

const Spacer = styled.div`
  width: 100%;
  height: ${props => (props.height ? props.height : 100)}px;
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
  align-items: stretch;
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
  margin: 0 10px;
`

const StyledH3 = styled(H3)`
  color: black;
`

const StyledBlackP = styled(P)`
  color: black;
`

const EmailWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
`
const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      passionsCount: 0,
      usersCount: 0,
      email: '',
      done: false,
    }
  }

  componentDidMount() {
    this.updateInfo()
  }

  updateInfo = () => {
    Promise.all([
      fetch('/api/passions/count', { method: 'GET' }).then(r => r.json()),
      fetch('/api/users/count', { method: 'GET' }).then(r => r.json()),
    ])

      .then(([passionResponse, userResponse]) => {
        this.setState({
          passionsCount: passionResponse.data.count,
          usersCount: userResponse.data.count,
        })
      })
  }

  registerUser = () => {
    const { email } = this.state
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
      .then(r => r.json())
      .then(() => {
        this.setState({
          email: '',
          done: true,
        })
        this.updateInfo()
      })
  }

  render() {
    const {
      usersCount,
      passionsCount,
      email,
      done,
    } = this.state
    return (
      <Layout>
        <FullWidthBannerContainer>
          <FullWidthBanner />
          <BannerBox>
            <H1>
              完整、迅速開發 dApp
            </H1>
            <P>
              工程師來引導你。
            </P>
            <P>
              後端 「Solidity」＋前端 「Web3.js, React.js」
            </P>
            <Spacer />
            <Button>
              立刻報名
            </Button>
          </BannerBox>
        </FullWidthBannerContainer>
        <ContainerWithMaxWidth background="#F2F2F2">
          <TitleSection>
            <StyledH2>
              區塊鏈「3.0」來襲
            </StyledH2>
          </TitleSection>
          <ContentSection>
            <StyledP>
              相信你已經看不少多公司在徵『全端工程師』『dApp工程師」』，換句話說『智能合約開發經驗＋前端開發經驗』。
              企業已經嗅到區塊鏈潛在的商機！但是不足的是...懂得『開發dApp』的工程師。
            </StyledP>
          </ContentSection>
          <SectionImage>
            <WhySmartContractImage src="/static/why.jpg" />
          </SectionImage>
        </ContainerWithMaxWidth>
        <ContainerWithMaxWidth background="#FFFFFF">
          <TitleSection>
            這個教程內你可以
          </TitleSection>
          <ContentSection>
            {
          [
            {
              key: 'easy-material',
              title: '教材簡單易懂',
              content: '專業術語大多？英文看完更不懂？因為那是工程師寫出來的。我們用無基礎的前提下設計教材，帮你降低學習門檻。',
            },
            {
              key: 'do-while-learn',
              title: '做中學習',
              content: '你將會做出至少三個作品，而且能幫助你不只有了解怎麼做，你還會學到「HOW」「WHAT」「WHEN」',
            },
          ]
            .map(x => (
              <Box key={x.key}>
                <StyledH3>{x.title}</StyledH3>
                <StyledBlackP>{x.content}</StyledBlackP>
              </Box>
            ))
        }
          </ContentSection>
        </ContainerWithMaxWidth>
        <ContainerWithMaxWidth>
          <CourseWrapper>
            <ContentSection>
              <H3>
                課程大綱
              </H3>
            </ContentSection>
            <ContentSection>
              <Card
                title="後端 (Solidity)"
                items={[
                  '撰寫智能合約',
                  '部署智能合約',
                ]}
              />
            </ContentSection>
            <ContentSection>
              <Card
                title="前端 (Web3.js, React.js, Truffle Suite)"
                items={[
                  '『Web3.js』與智能合約的溝通',
                  '『Web3.js』與『React.js』',
                  '『Truffle Suite』 幫助你開發的工具',
                ]}
              />
            </ContentSection>
            <Spacer height={50} />
            <ContentSection>
              <Card
                title="『ICO』虛擬貨幣募資"
                items={[
                  '『ERC20 Token』智能合約開發',
                  '『Web3』『智能合約』的溝通',
                ]}
                images={[
                  '/static/ico.png',
                ]}
              />

            </ContentSection>
            <ContentSection>
              <Card
                title="『使用者註冊』"
                items={[
                  '使用者註冊',
                  '簡易老鼠會智能合約',
                ]}
                images={[
                  '/static/register-user-form.png',
                  '/static/register-user-dashboard.png',
                ]}
              />
            </ContentSection>
            <ContentSection>
              <Card
                title="『猜數字遊戲』"
                items={[
                  '猜數字遊戲智能合約開發',
                  '內涵可當遊戲莊家機制',
                  '智能合約互相的溝通',
                ]}
                images={[
                  '/static/game-setting.png',
                  '/static/game-number-guessing.png',
                ]}
              />
            </ContentSection>
            <Spacer height={10} />
          </CourseWrapper>
        </ContainerWithMaxWidth>
        <ContainerWithMaxWidth>
          <ContentSection>
            <EmailWrapper>
              <ContentSection>
                <H3>
                  已有
                  {' '}
                  {passionsCount}
                  {' '}
                  人表示有興趣，
                  {usersCount}
                  {' '}
                  人報名
                </H3>
              </ContentSection>
              <Input
                placeholder="example@gmail.com"
                onChange={e => this.setState({ email: e.target.value })}
                value={email}
              />
              <Spacer height={30} />
              <ContentSection>
                {done && (
                  <H3>
                    已成功報名
                  </H3>
                )}
              </ContentSection>
              <ContentSection>
                <Button
                  onClick={() => this.registerUser(email)}
                  isDisabled={!email || !emailValidator.validate(email)}
                >
                  立刻報名
                </Button>
              </ContentSection>
            </EmailWrapper>
          </ContentSection>
        </ContainerWithMaxWidth>
      </Layout>
    )
  }
}


export default IndexPage
