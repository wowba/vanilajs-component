import { Component } from "../core/wowba";
import messageStore from '../store/message'

export default class Title extends Component {
  constructor() {
    super({
      tagName: 'h1'
    })
    messageStore.subscribe('message', (val) => {
      console.log(val)
      this.render()
    })
  }
  render() {
    this.el.textContent = `Title: ${messageStore.state.message}`
  }
}