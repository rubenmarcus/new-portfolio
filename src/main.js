import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/global.scss'

export default function (Vue, { head }) {
  if (process.isClient) {
    const VueTyper = require('vue-typer').default;
    Vue.use(VueTyper);
    const isPt = checkLanguage()
      Vue.prototype.$lang = 'en'

    if(isPt){
      head.htmlAttrs = { lang: "pt-BR"}
      Vue.prototype.$lang = 'pt-BR'
    }
}
  Vue.component('Layout', DefaultLayout)
}

function checkLanguage() {
  return navigator.languages.includes('pt-BR') || navigator.languages.includes('pt');
}
