import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/global.scss'

export default function (Vue) {
  if (process.isClient) {
    const VueTyper = require('vue-typer').default;
    Vue.use(VueTyper);
}
  Vue.component('Layout', DefaultLayout)
}
