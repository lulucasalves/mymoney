import styled from 'styled-components'

let textColor = '#121317'

export const Base = styled.h2`
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  color: ${props => (props.color ? props.color : textColor)};
  font-size: ${props => (props.fontSize ? props.fontSize : '2.25rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '54px')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : '')};
`