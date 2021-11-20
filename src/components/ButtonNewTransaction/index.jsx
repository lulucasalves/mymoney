import { Base } from './styles'

export function ButtonNewTransaction(props) {
  return <Base type="button" {...props}>{props.children}</Base>
}
