import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 50px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  border: 2px solid crimson;
  width: 97%;
  background-color: crimson;
`

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`
const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <MenuItem>
              <a href='#' style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href='#feature'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Features
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href='#service'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Services
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href='#price'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Pricing
              </a>
            </MenuItem>

            <MenuItem>
              <a
                href='#contact'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Contact
              </a>
            </MenuItem>
          </Menu>
        </Left>

        <a href='SignUp.html'>
          <Button>JOIN TODAY</Button>
        </a>
      </Wrapper>
    </Container>
  )
}

export default Navbar
