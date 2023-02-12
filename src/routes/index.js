// 페이지(라우터) 내용을 제어하는 파일

import { createRouter } from '../core/wowba.js'
import Home from "./Home";
import About from "./About";

export default createRouter([
  { path: '#/', component: Home},
  { path: '#/about', component: About},
])