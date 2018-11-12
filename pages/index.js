import React from 'react'
import styled from 'styled-components'
import fetch from 'node-fetch'
import emailValidator from 'email-validator'
import Profile from '../components/Profile'
import Layout from '../components/Layout'
import Card from '../components/Card'
import Blockchain from '../components/BlockchainV3'
import {
  H1,
  H2,
  H3,
  H4,
  P,
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
  white-space: pre-line;
  text-align: center;
`

const StyledH2 = styled(H2)`
  color: #333333;
`

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`
const SectionImage = styled.div`
  margin-top: 80px;
  width: 100%;
  text-align: center;
`

const WhySmartContractImage = styled.img`
  width: 500px;
  @media(max-width: 768px) {
    width: 100%;
  }
`

const Box = styled.div`
  align-self: flex-start;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  @media(max-width: 768px) {
    width: 100%;
    flex: none;
    margin-bottom: 40px;
  }
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

const Table = styled.table`
  width: 100%;
  color: #666666;
  background: rgb(206, 215, 226);
  padding: 0 20px 20px 20px;
  > tr > td {
    width: 33.33%;
    text-align: center;
    font-size: 20px;
    border: 1px solid rgb(18, 32, 40);
    padding: 10px 0;
  }
`

const StyledLink = styled.a`
  color: #954a97;
  text-decoration: underline;
`

const DappImg = styled.img`
  width: calc(100% - 6px);
  border: 3px solid rgb(206, 215, 226);
`

class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      passionsCount: 0,
      usersCount: 0,
      email: '',
      name: '',
      message: '',
      collectionLink: '',
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
    const {
      email,
      message,
      name,
      collectionLink,
    } = this.state

    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.assign(
        {},
        { email },
        { name },
        message ? { message } : {},
        collectionLink ? { collectionLink } : {},
      )),
    })
      .then(r => r.json())
      .then(() => {
        this.setState({
          email: '',
          message: '',
          name: '',
          collectionLink: '',
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
      message,
      collectionLink,
      done,
      name,
    } = this.state
    return (
      <Layout>
        <FullWidthBannerContainer>
          <FullWidthBanner />
          <BannerBox>
            <H1>
              完整、迅速開發
              {'\n'}
              dApp
            </H1>
            <P>
              工程師來引導你。
            </P>
            <P>
              後端『Solidity』
              {'\n'}
              前端『Web3.js, React.js』
            </P>
            <Spacer />
          </BannerBox>
        </FullWidthBannerContainer>
        <ContainerWithMaxWidth background="#F2F2F2">
          <TitleSection>
            <StyledH2>
              區塊鏈「3.0」來襲
            </StyledH2>
          </TitleSection>
          <ContentSection>
            <Blockchain />
            <Table>
              <tr>
                <td>Bitcoin</td>
                <td>網路</td>
                <td>
                  <StyledLink href="https://dexon.org/">
                    DEXON
                  </StyledLink>
                </td>
              </tr>
              <tr>
                <td>7 ~ 10</td>
                <td>每秒處理</td>
                <td>
                  <StyledLink href="https://testnet.dexscan.org/network">
                    {'>'}
                    10,000
                  </StyledLink>
                </td>
              </tr>
            </Table>
            <StyledLink href="https://medium.com/@chaoweichiu/dapp-%E6%9C%89%E6%9C%AA%E4%BE%86%E5%97%8E-%E7%8F%BE%E5%9C%A8%E6%87%89%E8%A9%B2%E8%A6%81%E5%AD%B8-%E8%81%BD%E8%81%BD%E5%B7%A5%E7%A8%8B%E5%B8%AB%E6%80%8E%E9%BA%BC%E8%AA%AA-15fc6a62fa27?fbclid=IwAR1EoSVi9LBX6_Mbm5oD8dKBUGUzkeWLx17mrDWlZdTm1HyYyIsantFPcBE">
              <DappImg src="/static/dapp.png" />
            </StyledLink>
            <StyledP>
              隨著區塊鏈技術的成熟（效率的提升），有智慧的『你/妳』是不是已注意到
              不少企業已開始投入不少資源在孵化『dApp』
            </StyledP>
            <StyledP>
              {'\n'}
              想知道怎麼實作一個『dApp』？
              {'\n'}
              想知道怎麼快速開發『dApp』？
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
              title: '簡單易懂',
              content: '專業術語大多？看完更覺得更加不懂？因為那是工程師寫出來的。我們用無基礎的前提下設計教材，幫你降低學習門檻。',
            },
            {
              key: 'do-while-learn',
              title: '做中學習',
              content: '『你/妳』將會做出至少三個作品，在邊學邊做的過程中更深入的了解每一行程式碼背後的含義，幫助你之後可以舉一反三。',
            },
          ]
            .map(x => (
              <Box key={x.key}>
                <StyledH3>
                『
                  {x.title}
                』
                </StyledH3>
                <StyledBlackP>{x.content}</StyledBlackP>
              </Box>
            ))
        }
          </ContentSection>
        </ContainerWithMaxWidth>
        <ContainerWithMaxWidth background="#F2F2F2">
          <TitleSection>
            <StyledH2>
              團隊
            </StyledH2>
          </TitleSection>
          <ContentSection>
            <Profile
              name="小吉"
              jobTitle="『每週50在幣圈』部落客"
              description="現任虛擬貨幣礦場管理技術工程師。並且是Medium 『每週50在幣圈』連載部落客，講述目前幣圈的概況及區塊鏈的基本技術和使用場景。"
              image="/static/gee.png"
              socials={[
                { icon: '/static/icon-medium.png', link: 'https://medium.com/@xiaojibc' },
              ]}
            />
            <Profile
              name="Wayne"
              jobTitle="COBINHOOD 軟體工程師"
              description="現任COBINHOOD虛擬貨幣交易所前端工程師。業餘愛好是在 Stackoverflow 回答問題，其目前積分大於2,000，以及Medium 『聽聽工程師怎麼說』連載部落客，講解區塊鏈技術層面及其技術的使用場景。"
              image="/static/coingrandpa.png"
              socials={[
                { icon: '/static/icon-github.png', link: 'https://github.com/chaoweichiu' },
                { icon: '/static/icon-medium.png', link: 'https://medium.com/@chaoweichiu' },
                { icon: '/static/icon-stackoverflow.png', link: 'https://stackoverflow.com/users/6778784/wayne-chiu?tab=profile' },
              ]}
            />
          </ContentSection>
        </ContainerWithMaxWidth>
        <ContainerWithMaxWidth>
          <CourseWrapper>
            {
              [
                <H3>
                  學習大綱
                </H3>,
                <Card
                  title="後端 (Solidity)"
                  items={[
                    '撰寫智能合約',
                    '部署智能合約',
                  ]}
                />,
                <Card
                  title="前端 (Web3.js, React.js, Truffle Suite)"
                  items={[
                    '『Web3.js』與智能合約的溝通',
                    '『Web3.js』與『React.js』',
                    '『Truffle Suite』 幫助你開發的工具',
                  ]}
                />,
                <Spacer height={50} />,
                <H3>
                  課程大綱『籌備中』
                </H3>,
                <Card
                  title="『ICO』虛擬貨幣募資"
                  items={[
                    '『ERC20 Token』智能合約開發',
                    '『Web3』與『智能合約』溝通',
                  ]}
                  images={[
                    '/static/ico.png',
                  ]}
                />,
                <Card
                  title="『使用者註冊名冊』"
                  items={[
                    '使用者註冊名冊',
                    '使用者『推薦機制』',
                    '使用者『獎勵機制』',
                  ]}
                  images={[
                    '/static/register-user-form.png',
                    '/static/register-user-dashboard.png',
                  ]}
                />,
                <Card
                  title="『猜數字遊戲』"
                  items={[
                    '猜數字遊戲『智能合約開發』',
                    '可當莊家機制',
                    '不同智能合約的相互溝通',
                  ]}
                  images={[
                    '/static/game-setting.png',
                    '/static/game-number-guessing.png',
                  ]}
                />,
                <Spacer height={10} />,
              ].map((component, index) => (
                <ContentSection key={`${index}-content-section`}> {/* eslint-disable-line */}
                  {component}
                </ContentSection>
              ))
            }
          </CourseWrapper>
        </ContainerWithMaxWidth>
        <ContainerWithMaxWidth>
          <ContentSection>
            <EmailWrapper>
              <ContentSection>
                <H3>
                  {passionsCount}
                  {' '}
                  人表示有興趣，
                  {usersCount}
                  {' '}
                  人訂閱
                </H3>
              </ContentSection>
              <Input
                placeholder="Mail『必填』"
                onChange={e => this.setState({ email: e.target.value })}
                value={email}
              />
              <Spacer height={10} />
              <Input
                placeholder="姓名『必填』"
                onChange={e => this.setState({ name: e.target.value })}
                value={name}
              />
              <Spacer height={10} />
              <Input
                placeholder="作品/Github連結『想參加小班教學必填』"
                onChange={e => this.setState({ collectionLink: e.target.value })}
                value={collectionLink}
              />
              <Spacer height={10} />
              <Input
                placeholder="留言板『選填』"
                onChange={e => this.setState({ message: e.target.value })}
                value={message}
              />
              <Spacer height={10} />
              <ContentSection>
                <H3>訂閱內容</H3>
              </ContentSection>
              <ContentSection>
                <H4>『線上課程（籌畫中）』</H4>
              </ContentSection>
              <ContentSection>
                <H4>『小班教學（有Coding經驗）』</H4>
              </ContentSection>
              <ContentSection>
                <H4>『小班教學（無Coding經驗）』</H4>
              </ContentSection>
              <Spacer height={30} />
              <ContentSection>
                {done && (
                  <H3>
                    訂閱成功
                  </H3>
                )}
              </ContentSection>
              <ContentSection>
                <Button
                  onClick={() => this.registerUser(email)}
                  isDisabled={!email || !name || !emailValidator.validate(email)}
                >
                  立即訂閱
                </Button>
              </ContentSection>
            </EmailWrapper>
          </ContentSection>
        </ContainerWithMaxWidth>
        <Spacer height={30} />
      </Layout>
    )
  }
}


export default IndexPage
