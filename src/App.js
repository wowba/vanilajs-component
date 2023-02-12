// export default class App {
//   constructor() {
//     this.el = document.createElement(`div`)
//     this.el.textContent = `Hello, world!`
//   }
// }

// App.js 파일은 프로젝트 내 index.html 파일을 찾고 
// JS컴포넌트들을 연결하는 역할을 한다.
import { Component } from "./core/wowba";
import FruitItem from "./components/FruitsItem"
import TheHeader from "./components/TheHeader";

export default class App extends Component {
  constructor() {
    super({
      state: {
        inputText: '', // 상속 혹은 확장해서 해당 데이터를 객체 데이터에서 새로운 속성 추가.
                      // 해당 데이터를 render에서 사용하며, 이 방식을 선언적 렌더링 이라고 함.
        fruits: [ // 부모의 state 안에 새로운 데이터 선언
          { name: 'apple', price: 1000 },
          { name: 'banana', price: 2000 },
          { name: 'cherry', price: 3000 }
        ]             
      }
    }) // Component 클래스의 constructor 실행
    // constructor는 생략시 상속받은 부모의 생성자 사용
  }
  render() {
    //// 검색창
    this.el.classList.add('search')
    this.el.innerHTML = /* html */ `
      <input />
      <button>Click!</button>
    `

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      this.state.inputText = inputEl.value
    })

    const buttonEl = this.el.querySelector('button')
    buttonEl.addEventListener('click', () => {
      console.log(this.state.inputText)
    })

    //// 과일 반복문 표시
    console.log(this.state.fruits)
    this.el.innerHTML += /* html */ `
      <h1> Fruits </h1>
      <ul></ul>
    `

    const ulEl = this.el.querySelector('ul')
    ulEl.append(
      ...this.state.fruits
      .map( fruit => new FruitItem({
        props: {
          name: fruit.name,
          price: fruit.price
        }
      }).el 
    ))

    //// 헤더 표시
    const routerView = document.createElement('router-view')
    this.el.append(
      new TheHeader().el,
      routerView
    )
  }
}