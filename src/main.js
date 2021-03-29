import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/global.scss'

export default function (Vue, { head }) {
  if (process.isClient) {
    const VueTyper = require('vue-typer').default;
    Vue.use(VueTyper);
    const isPt = checkLanguage()
    console.log(!whatPath())
    if(isPt && !whatPath()){
      head.htmlAttrs = { lang: "pt-BR"}
      document.documentElement.classList.add('pt-BR')
    } else {
      window.location.pathname == 'en'
      head.htmlAttrs = { lang: "en"}
      document.documentElement.classList.add('en')

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
