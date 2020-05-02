import React from 'react'
import ReactDOM from 'react-dom'

// https://github.com/zeit/next.js/issues/3493
// https://github.com/zeit/next.js/blob/85769c3d3296cdcddc0fb36f05058c8e451ca57f/examples/with-portals/components/Portal.js
export default class NextPortal extends React.Component {
  componentDidMount () {
    this.element = document.querySelector(this.props.selector)
  }

  render () {
    if (this.element === undefined) {
      return null
    }
    return ReactDOM.createPortal(this.props.children, this.element)
  }
}
