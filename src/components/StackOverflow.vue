<template>
    
    <section class="align-top mt-80">
  <h1>
     Respostas no StackOverflow
    </h1>
    <ul>
      <li v-for="post in posts" :key="post.title">
        <a :href="post.link"> {{ post.title }} </a>
      </li>
    </ul>
    </section>
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