import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/global.scss'

export default function (Vue, { head }) {
  if (process.isClient) {
    const VueTyper = require('vue-typer').default;
    Vue.use(VueTyper);
    console.log(navigator.languages, 'language')
    const isPt = checkLanguage()
    console.log(checkLanguage(), isPt)


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
