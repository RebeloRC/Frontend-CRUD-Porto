import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const FormsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 660px;
  padding: 40px;
  color: #BFC0C1;

  h2{
    color: #13181E;
    margin-bottom: 1rem;
  }
`;

export const Input = styled.input`
width: 400px;
padding: 1rem;
border: 1px solid #BBBCBD;
border-radius: 10px;
background: none;
color: #13181E;

& + input {
  margin-top: 1rem;
}
`

export const ContainerButton = styled.div`
  display: flex;
`

export const Button = styled.button`
  margin-top: 1rem;

  width: 100px;
  height: 30px;
  background: #ff4d00;
  border-radius: 56px;
  border: none;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
  color: #EFEFEF;
  font-size: 1.125rem;
  font-weight: 600;

  & + Button{
    margin-left: 0.3rem;
  }
`
export const MovimentacoesHeader = styled.div`
  display: flex;
  align-content: center;
  width: 1440px;
  margin: 0rem auto;
  border: 0.1rem solid rgba(0, 0, 0, 0.233);
  padding: 1rem;
  justify-content: space-between;

`

