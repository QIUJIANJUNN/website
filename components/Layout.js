import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const Links = [
  { name: '课程介绍', url: '/' },
]

const Background = styled.div`
background:#3d3d3d;
height:100vh;
width:100vw;
overflow:auto;
color:white;
`
const StyledLink = styled.a`
display:flex;
align-items:center;
justify-content:center;
color:white;
outline:none;
padding:8px 12px;
background:transparent;
transition-property:color, background-color border, border-color;
transition-duration:400ms;
transition-timing-function:ease;
margin-right:20px;
border: 1px solid transparent;
&:hover{
  cursor:pointer;
  color:#ff9a00;
  text-decoration:none;
  border: 1px solid white;
}
@media(max-width:768px){
  font-size:4.5vw;
  padding:0 2.5vw 0 2.5vw;
  height:60%;
  margin-right:1vw;
}
`
const LeftArea = styled.div`
  width:10%;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  height:100%;
`
const RightArea = styled.div`
  width:90%;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  height:100%;
`
const Header = styled.div`
  position: relative;
  background:rgb(18, 32, 40);
  width:100vw;
  height:50px;
  display:flex;
`
const ImgWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
  margin-left:15px;
`
const Img = styled.img`
  height:50%;
  border-radius: 100%;
`

const Fade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

const PipeShape = styled.div`
  width: 3px;
  height: 70%;
  background: white;
  animation-name: ${Fade};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  margin-left: 5px;
`

const TypingWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 50px;
  height: 50%;
  display: flex;
  align-items: flex-end;
  margin-left: 5px;
`

const TypingText = styled.div`
  line-height: auto;
  width: auto;
  font-size: 12px;
`

const Layout = ({ children }) => (
  <Background>
    <Header>
      <Link prefetch href="/">
        <LeftArea>
          <ImgWrapper>
            <Img
              src="/static/coingrandpa.png"
            />
            <TypingWrapper>
              <TypingText>
                GO？
              </TypingText>
              <PipeShape />
            </TypingWrapper>
          </ImgWrapper>
        </LeftArea>
      </Link>
      <RightArea>
        {
            Links.map(link => (
              <Link prefetch href={link.url} key={link.name}>
                <StyledLink>{link.name}</StyledLink>
              </Link>
            ))
          }
      </RightArea>
    </Header>
    {children}
  </Background>
)

Layout.propTypes = {
  children: PropTypes.any, /* eslint-disable-line */
}

export default Layout
