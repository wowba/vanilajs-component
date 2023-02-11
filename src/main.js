import App from './App.js' // 화면에 출력할 컴포넌트 임포트

const root = document.querySelector(`#root`)
root.append(new App().el)