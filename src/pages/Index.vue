<template>
  <Layout>
    <div class="container">
    <div class=" flex">
     <Links />
    <Skills />
    </div>
  
  <div class=" flex">
   <BlogPosts />
   <StackOverflow />
    </div>
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
import Skills from '~/components/Skills.vue'
import Links from '~/components/Links.vue'
import BlogPosts from '~/components/Blog.vue'
import StackOverflow from '~/components/StackOverflow.vue'


export default {
   components: {
    Skills,
    Links,
    BlogPosts,
    StackOverflow
  },

};
</script>
