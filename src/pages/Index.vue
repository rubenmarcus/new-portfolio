<template>
  <Layout>
<Open />
    <div class="stats justify-right text-right">
      <div class="container">
        <div class="d-flex flex-wrap">
          <p>
            <span class="number-size">~100k</span>
            lines of code
            <br />per month
          </p>

          <p>
            <span class="number-size">~15</span>
            meeting calls
            <br />per week
          </p>

          <p>
            <span class="number-size">~20</span>
            Jira tasks delivered
            <br />each month
          </p>

          <p>
            <span class="number-size">~16k</span>
            of people reached at
            <br />
            <a
              class="link-highlight"
              href="https://stackoverflow.com/users/5905497/ruben-marcus"
            >StackOverflow</a>
          </p>

          <p>
            <span class="number-size">~4k</span>
            people reached at
            <br />
            <a class="link-highlight" href="https://rubenmarcus.medium.com/">Medium</a>
          </p>

          <p>
            <span class="number-size">53</span>
            projects done
          </p>

          <p>
            <span class="number-size">~40</span>
            hours of studying
            <br />per week
          </p>

          <p>
            <span class="number-size">3</span>
            articles translated
            <br />at MDN
          </p>

          <p>
            <span class="number-size">~1 mi</span>
            lines of code tested
            <br />at SonarQube
          </p>

          <p>
            <span class="number-size">46</span>
            public repositories
            <br />at Github
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <BlogPosts />
      <StackOverflow />
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
import Skills from "~/components/Skills.vue";
import Open from "~/components/Open.vue";
import Links from "~/components/Links.vue";
import BlogPosts from "~/components/Blog.vue";
import StackOverflow from "~/components/StackOverflow.vue";



export default {

  components: {
    Open,
    Skills,
    Links,
    BlogPosts,
    StackOverflow
  },
    watch: {
    $route(to, from) {
       console.log(to, from, 'route')
    },
   },
    beforeRouteUpdate(to, from, next) {
    // react to route changes...
    // don't forget to call next()
         console.log(to, from, 'route')
    next();
  },
  metaInfo: {
    title: "rubenmarcus.dev"
  }
};
</script>
