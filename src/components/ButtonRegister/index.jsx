import { Base } from './styles'

export function ButtonRegister(props) {
  return <Base type="button" {...props}>{props.children}</Base>
}
