// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`
export const CustomHeading = styled.h1`
  font-family: 'Bree Serif';
  font-weight: 700;
  font-size: 40px;
`

export const InputCardContainer = styled.form`
  width: 90%;
  border: 1px solid grey;
`
export const CustomInput = styled.input`
  border: 1px solid grey;
  width: 100px;
  outline: none;
  border-radius: 2px;
`
export const CustomTextArea = styled.textarea`
  border: 1px solid grey;
  outline: none;
  border-radius: 2px;
  width: 500px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CustomButton = styled.button`
  height: 35px;
  width: 120px;
  border: none;
  border-radius: 3px;
  background-color: #4c63b6;
  color: #ffffff;
`
export const NoteItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const NoNotesYetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoNotesImage = styled.img`
  height: 40px;
`
export const NoNotesHeading = styled.h1`
  font-family: 'Bree Serif';
  font-weight: 500;
  font-size: 25px;
`
export const NoNotesCaption = styled.p`
  font-family: 'Bree Serif';
  font-weight: 300;
  font-size: 20px;
`
