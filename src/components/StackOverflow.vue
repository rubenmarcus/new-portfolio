<template>
    
    <div class="mid-width justify-left align-top flex">
  <h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width="0.86em"
        height="1em"
        style="
          -ms-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        "
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1536 1792"
      >
        <path
          d="M1289 1632H171v-480H11v640h1438v-640h-160v480zm-942-524l33-157l783 165l-33 156zm103-374l67-146l725 339l-67 145zm201-356l102-123l614 513l-102 123zM1048 0l477 641l-128 96L920 96zM330 1471v-159h800v159H330z"
          fill="#fff"
        /></svg
      >Respostas no StackOverflow
    </h1>
    <ul>
      <li v-for="post in posts" :key="post.title">
        <a :href="post.link"> {{ post.title }} </a>
      </li>
    </ul>
    </div>
</template>

<script>
import axios from "axios";


export default {
  name: 'StackOverflow',
   data() {
    return {
      posts: null,
    };
  },
  async mounted() {
    try {
      const results = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://stackoverflow.com/feeds/user/5905497"
      );

      this.posts = results.data.items
    } catch (error) {
      console.log(error);
    }
  },
};

</script>

<style>
.card {
  padding: 20px;
  background: #FFF;
}
</style>