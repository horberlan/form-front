import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  position: relative;
  background: #8a2ae2;
`
export const Formulario = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box; 
  flex-direction: column;
  top: 6.857rem;
  min-height: 31.64285rem;
  
  /* min-width: 20rem; */
  border-radius: 0.4rem;
  transition: 1s;
  background: #f1f1f1;
  box-shadow: 15px 13px 51px -16px rgba(0, 0, 0, 0.44);
`
export const ContainerFormulario = styled.div`
  padding: 0 5%;
  margin-top: 4.8rem;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  div{
      position: relative;
      z-index:2;
      right:40%;
      top:-60px;
      align-self:flex-end;
    img{
        position: absolute;
    }
  }
`
export const BgHeader = styled.img`
  position: relative;
  top: 0px;
  width: 100%;
  z-index: 0;
`
export const Span = styled.span`
  position: relative;
  top: 10px;
  left: 1.2rem;
  line-height: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  padding: 5px 0;
  z-index: 1;
`
export const TextBold = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 50px;
`
export const IputsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 2%;
  & .itemFlex {
    margin-top: 1%;
    flex-direction: column;
  }
`
export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  /* justify-content: center; */
`

export const ButtonQunat = styled.button`
  cursor: pointer;
  padding: 0px 10px;
  background: #2e3676;
  color: #fff;
  border: none;
  border-radius: 6px;
  margin: 5px;
  font-size: 1.5em;
`
export const InputQuant = styled.input`
  width: 30px;
  background: #dce2e8;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding:6px 12px;
  text-align: center;
  &::placeholder {
    text-align: center;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 6rem;
  border-radius: 10px;
  margin: 10px 0;
  border: 1px solid #646997;
  background: #dce2e8;
  overflow-x: hidden;
  &::placeholder {
    position: relative;
    color: #646997;
    padding: 2% 5%;
  }
`
export const ContainerSubmit = styled.div`
  /* position: relative; */
  /* height:20px; */
  background: #dce2e8;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`
export const ButtonForm = styled.button`
  cursor: pointer;
  padding: 6px 26px;
  border-radius: 0.5rem;
  margin: 1.14285rem;
  max-width: 100px;
  text-decoration: none;
  background: #2e3676;
  border: none;
  color: #fff;
  text-transform: uppercase;
  /* font-weight: bold; */
`
