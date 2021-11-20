import styled from 'styled-components'

let textColor = '#121317'

export const Base = styled.h3`
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  color: ${props => (props.color ? props.color : textColor)};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.5rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '600')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '36px')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : '')};
`
