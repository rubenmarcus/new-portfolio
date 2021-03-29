<template>
  <a href="#" class="lang-switcher" @click.prevent="toggleLang" >
      <g-link  to="/en">EN</g-link>
      <g-link to="/">PT-BR</g-link>
</a>
</template>

<script>
export default {
name: "LangSwitcher",
}
</script>