import React from 'react'
import styled from 'styled-components'
import Map from '../img/map.png'
import Send from '../img/send.png'
import Phone from '../img/phone.png'

const Container = styled.div`
  height: 90%;
  background: url('https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png');
`
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FormContainer = styled.div`
  width: 50%;
`
const Title = styled.h1`
  margin-left: 115px;
  margin-top: 0;
  margin-bottom: 50px;
`
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Input = styled.input`
  width: 200px;
  padding: 20px;
`
const TextArea = styled.textarea`
  padding: 20px;
  width: 200px;
  height: 60%;
`
const Button = styled.button`
  width: 100%;
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
  justify-content: center;
  letter-spacing: 3px;
`
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  //align-items: center;
`
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
`

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder='Your Name' />
              <Input placeholder='Your Email' />
              <Input placeholder='Subject' />
            </LeftForm>
            <RightForm>
              <TextArea placeholder='Your Message' />
              <Button>send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>6th OCTOBER CITY, CAIRO, EGYPT</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>(+2) 1025231287</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>dardasghith@gmail.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  )
}

export default Contact
