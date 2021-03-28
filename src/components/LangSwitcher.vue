<template>
  <a href="#" class="lang-switcher" @click.prevent="toggleLang" >
    <span v-if="lang === 'pt-BR'"> PT-BR</span>
      <span v-if="lang === 'en'"> ENGLISH</span>
</a>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      required: true,
    }
  },
  methods: {
    toggleLang() {
      const newLang = this.lang === 'en' ? 'pt-BR' : 'en'

      this.$emit('langChanged', newLang)
    }
  }
}
</script>