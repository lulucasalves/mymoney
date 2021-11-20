import styled from 'styled-components'

let textColor = '#121317'

export const Base = styled.p`
  margin: ${props => (props.margin ? props.margin : '0')};
  color: ${props => (props.color ? props.color : textColor)};
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '24px')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : '')};
`
