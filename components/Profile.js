import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  H2,
  H4,
  P,
} from '../components/Text'


const Icon = styled.img`
  width: 30px;
  height: 30px;
  transition: border 0.2s ease-in-out;
  padding: 10px;
  margin: 0 5px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`

const Link = styled.a``

const ProfileContainer = styled.div`
  border-radius: 10px;
  flex: 1;
  margin: 0 10px;
  background: #F2F2F2;
  display: flex;
  align-items: center;
  padding: 100px 20px 30px 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  flex-direction: column;
  position: relative;
  @media(max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`

const Image = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: 1px solid rgb(18, 32, 40, 0.2);
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgb(18, 32, 40, 0.2);
`

const Spacer = styled.div`
  width: 100%;
  height: 30px;
`

const StyledH2 = styled(H2)`
  color: rgba(18, 32, 40, 0.7);
`
const StyledH4 = styled(H4)`
  color: rgba(18, 32, 40, 0.7);
  font-size: 20px;
`
const StyledP = styled(P)`
  color: rgba(18, 32, 40, 0.7);
  white-space: pre-line;
  font-size: 16px;
`

const SocialsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`

const Profile = ({
  name,
  description,
  image,
  jobTitle,
  socials,
}) => (
  <ProfileContainer>
    <Image src={image} />
    <Spacer />
    <StyledH2>
      {name}
    </StyledH2>
    <StyledH4>
      {jobTitle}
    </StyledH4>
    <Line />
    <Spacer />
    <StyledP>
      {description}
    </StyledP>
    <Spacer />
    <Spacer />
    <SocialsContainer>
      {socials.map(social => (
        <Link href={social.link} key={social.link}>
          <Icon src={social.icon} />
        </Link>
      ))}
    </SocialsContainer>
  </ProfileContainer>
)

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  socials: PropTypes.array, /* eslint-disable-line */
}

export default Profile
