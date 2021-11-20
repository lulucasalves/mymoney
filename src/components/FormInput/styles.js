import styled from 'styled-components'

let selectedTextColor = '#121317'
let redColor = '#E62E4D'
let textColor = '#969CB2'
let backgroundColor = '#E7E9EE'
let borderColor = '#D7D7D7'

export const Base = styled.input`
  height: ${props => (props.height ? props.height : '64px')};
  width: ${props => (props.width ? props.width : '480px')};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  padding: ${props => (props.padding ? props.padding : '0 0 0 24px')};
  background: ${props =>
    props.background ? props.background : backgroundColor};
  border: ${props =>
    props.border ? props.border : `1px solid ${borderColor}`};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  color: ${props => (props.color ? props.color : textColor)};
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '36px')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : '')};

  color: ${props =>
    props.errors
      ? `${redColor}`
      : props.value
      ? `${selectedTextColor}`
      : `${textColor}`};

  &:focus {
    color: selectedTextColor;
  }
`
