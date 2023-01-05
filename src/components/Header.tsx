import styled from 'styled-components';

function Header() {
  return (
    <StyledHeader>
        <div>
            <img src="./src/assets/logo.svg" alt="logo" />
        </div>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.div `
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 200px;
background-color: #0D0D0D;
`