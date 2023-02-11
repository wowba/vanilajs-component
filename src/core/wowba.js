/// Component ///
export class Component {
  constructor(payload = {}) {
    const { 
      tagName = 'div', state = {} 
    } = payload
    this.el = document.createElement(tagName)
    this.state = state
    this.render()
  }
  render() {
    //.. 다른 파일에서 확장해서 사용
  }
}