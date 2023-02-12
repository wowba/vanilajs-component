import App from './App.js' // 화면에 출력할 컴포넌트 임포트
import router from './routes/index.js' // 페이지를 컨트롤하는 파일

const root = document.querySelector(`#root`)
root.append(new App().el)

router()