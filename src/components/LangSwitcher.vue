<template>
  <div href="#" class="lang-switcher">
      <g-link  @click="updateLang('en')" to="/en">EN</g-link>
      <g-link @click="updateLang('pt-BR')" to="/">PT-BR</g-link>
</div>
</template>

<script>
export default {
name: "LangSwitcher",
methods: {
  updateLang(lang) {
     if(process.isClient) {
    if(lang === 'en') {
     

        document.documentElement.classList.add('en');
        document.documentElement.classList.remove('pt-BR')
      } else { 
        
        document.documentElement.classList.add('pt-BR');
        document.documentElement.classList.remove('en')
      }
    } 
  }
},
}
</script>