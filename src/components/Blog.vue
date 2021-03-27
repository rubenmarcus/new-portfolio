<template>
    
    <section class="align-top mt-80 blog-posts">
  <h1>
      Blog Posts
    </h1>
    <ul class="d-flex flex-wrap">
      <li v-for="post in posts" class="text-center" :key="post.title">
        <a :href="post.link"> 
          <img width="240" :src="post.thumbnail" />
          
          <span>{{ post.title }}</span> </a>
      </li>
    </ul>
    </section>
</template>

<script>
import axios from "axios";


export default {
  name: 'BlogPosts',
   data() {
    return {
      posts: null,
    };
  },
  async mounted() {
    try {
      const results = await axios.get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rubenmarcus"
      );

      this.posts = results.data.items.filter(
        (article) => article.categories.length > 0
      );
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