import React, { useState } from 'react'
import styled from 'styled-components'
import How from '../img/how.png'
import MiniCard from './MiniCard'
import Play from '../img/play.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  width: 50%;
  position: relative;
`
const Image = styled.img`
  display: ${(props) => props.open && 'none'};
  width: 66%;
  margin-left: 100px;
`

const Video = styled.video`
  display: ${(props) => !props.open && 'none'};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`
const Right = styled.div`
  width: 50%;
`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1``
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  background-color: #2471a3;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`

const CloseButton = styled.button`
  width: 100px;
  border: none;
  border-radius: 10px;
  background-color: #2471a3;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 57%;
  cursor: pointer;
  margin-left: 450px;
`
const Service = () => {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <Left>
        <Image open={open} src={How}></Image>
        <Video
          open={open}
          autoPlay
          loop
          controls
          src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761'
        />
        <CloseButton onClick={() => setOpen(false)}>close</CloseButton>
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} /> How it works
          </Button>
        </Wrapper>
      </Right>
      <AnimatedShapes />
    </Container>
  )
}

export default Service
