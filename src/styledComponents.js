import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AppMainContainer = styled.div`
  width: 90%;
  height: 70%;
  background-color: #1b1c22;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TextEditorContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TextEditorImage = styled.img`
  height: 290px;
  width: 100%;
`

export const Heading = styled.h1`
  color: white;
`

export const TextAreaContainer = styled.div`
  border: 1px solid #cbd5e1;
  height: 96%;
  width: 54%;
  margin: auto;
  border-radius: 4px;
  background-color: #25262c;
`

export const IconsContainer = styled.ul`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10%;
  list-style-type: none;
`

export const ListElement = styled.li`
  list-style-type: none;
`

export const HorizontalLine = styled.hr`
  width: 100%;
  color: #25262c;
`

export const BoldIconButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isBoldText ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`
export const ItalicIconButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isItalicText ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`

export const UnderLineIconButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => (props.isUnderLineText ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`

export const InputElement = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  height: 90%;
  font-size: 13px;
  color: #ffffff;
  font-weight: ${props => (props.isBoldText ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderLineText ? 'underline' : 'normal')};
  font-style: ${props => (props.isItalicText ? 'italic' : 'normal')};
`
