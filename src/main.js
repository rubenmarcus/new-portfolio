import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/global.scss'

export default function (Vue, { head }) {
  if (process.isClient) {
    const VueTyper = require('vue-typer').default;
    Vue.use(VueTyper);
    const isPt = checkLanguage()
    console.log(!whatPath(), whatPath ,  Vue.router)
    if(isPt && !whatPath()){
      head.htmlAttrs = { lang: "pt-BR"}
      document.getElementById('app').classList.add('pt-BR')
    } else {
      head.htmlAttrs = { lang: "en"}
      document.getElementById('app').classList.remove('pt-BR')
      // document.documentElement.classList.add('en')
    }
}
  Vue.component('Layout', DefaultLayout)
}

function checkLanguage() {
  if (process.isClient) {
  return navigator.languages.includes('pt-BR') || navigator.languages.includes('pt');
  }
}

function whatPath(){
  if (process.isClient) {
  return window.location.pathname == '/en'
  }
}
