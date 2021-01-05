import React, { Component, ComponentType} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { RootStateType } from '../../redux/reduxStore'

type MapStateType = {
  isAuth:boolean
}
let mapStateToProps = (state: RootStateType):MapStateType => {
  return{
    isAuth: state.auth.isLogged
  }
}

export function withAuthRedirect<WCP> (WrappedComponent:ComponentType) {
  class RedirectComponent extends Component< MapStateType>{
    render() {
      let{isAuth, ...restProps} = this.props
      if (!isAuth) return <Redirect to = './login' />
      return <WrappedComponent {...restProps}/>
    }
  }
  let ConnectedAuthRedirectComponent = connect<MapStateType, {}, WCP, RootStateType>(mapStateToProps)(RedirectComponent)
  return ConnectedAuthRedirectComponent;
}