import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Form = styled.form``
const Title = styled.h1``
const Label = styled.label``
const Input = styled.input``
const Button = styled.button``

const SignUp = () => {
  return (
    <Container>
      <Form>
        <Title>Sign Up Now!!</Title>
        <Label>FIRST NAME</Label>
        <Input></Input>
        <Label>LAST NAME</Label>
        <Input></Input>
        <Label>Email</Label>
        <Input></Input>
        <Button>sign up</Button>
      </Form>
    </Container>
  )
}

export default SignUp
