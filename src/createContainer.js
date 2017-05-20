import Relay from 'react-relay/classic'
import toClass from 'recompose/toClass'

const createContainer = options => BaseComponent =>
  Relay.createContainer(toClass(BaseComponent), options)

export default createContainer
