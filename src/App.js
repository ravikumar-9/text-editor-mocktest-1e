import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  AppMainContainer,
  Heading,
  TextEditorContainer,
  TextEditorImage,
  TextAreaContainer,
  IconsContainer,
  HorizontalLine,
  BoldIconButton,
  ItalicIconButton,
  UnderLineIconButton,
  InputElement,
  ListElement,
} from './styledComponents'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isBold: false, isItalic: false, isUnderLined: false, inputText: ''}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeBoldOption = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onChangeItalicOption = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onChangeUnderlineOption = () => {
    this.setState(prevState => ({isUnderLined: !prevState.isUnderLined}))
  }

  render() {
    const {inputText, isBold, isItalic, isUnderLined} = this.state

    return (
      <BgContainer>
        <AppMainContainer>
          <TextEditorContainer>
            <Heading>Text Editor</Heading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorContainer>
          <TextAreaContainer>
            <IconsContainer>
              <ListElement>
                <BoldIconButton
                  data-testid="bold"
                  onClick={this.onChangeBoldOption}
                  isBoldText={isBold}
                >
                  <VscBold size={25} />
                </BoldIconButton>
              </ListElement>
              <ListElement>
                <ItalicIconButton
                  data-testid="italic"
                  onClick={this.onChangeItalicOption}
                  isItalicText={isItalic}
                >
                  <GoItalic size={25} />
                </ItalicIconButton>
              </ListElement>
              <ListElement>
                <UnderLineIconButton
                  data-testid="underline"
                  onClick={this.onChangeUnderlineOption}
                  isUnderLineText={isUnderLined}
                >
                  <AiOutlineUnderline size={25} />
                </UnderLineIconButton>
              </ListElement>
            </IconsContainer>
            <HorizontalLine />
            <InputElement
              value={inputText}
              onChange={this.onChangeInput}
              isBoldText={isBold}
              isItalicText={isItalic}
              isUnderLineText={isUnderLined}
            />
          </TextAreaContainer>
        </AppMainContainer>
      </BgContainer>
    )
  }
}

export default App
