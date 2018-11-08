import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link'

const Background = styled.div`
background:#3d3d3d;
height:100vh;
width:100vw;
overflow:auto;
color:white;
`

const LeftArea = styled.div`
  width:10%;
  display:flex;
  align-items:center;
  justify-content:flex-start;
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
    </Header>
    {children}
  </Background>
)

Layout.propTypes = {
  children: PropTypes.any, /* eslint-disable-line */
}

export default Layout
