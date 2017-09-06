import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const BT = (props) => {
   return <CSSTransition
      {...props}
      classNames="balloon-transition"
      timeout={{ enter: 500, exit: 500 }}
   />
}

const FT = (props) => {
   const { delay, ...rest } = props
   const tClass = delay ? `float-transition--delay-${delay}` : "float-transition"
   return <CSSTransition
      {...rest}
      classNames="float-transition"
      timeout={{ enter: 500, exit: 500 }}
   />
}

const Transitions = {
   BalloonTransition: BT,
   FloatTransition: FT
}

export const BalloonTransition = Transitions.BalloonTransition
export const FloatTransition = Transitions.FloatTransition
export default Transitions