import { Component } from "../core/wowba";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header'
    })
  }
  render() {
    // 주소창의 # 부분의 내용이 바뀌면 popstate 이벤트가 발생한다.
    // 이 이벤트를 활용하여 화면에 어떤 내용이 보일지 입력할 수 있다.
    this.el.innerHTML = /* html */ `
      <a href='#/'>Main</a> 
      <a href='#/about'>About</a>
    `
  }
}