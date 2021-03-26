<template>
  <Layout>

        <div class="about mt-80">
        <div class="container">
            Hello, I am a   <br />
         <span class="link-highlight">Software Engineer /  Front-end Specialist</span>
            <br /><span style="font-size:40px;">from São Paulo, Brazil.</span>
            <br />
        </div>
</div>
    <div class="stats mt-80 justify-right text-right">
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
            hours of studying <br/>
            per week
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
          
  <div class="container ">
   <BlogPosts />
   <StackOverflow />
    </div>
  </Layout>
</template>

<script>
import axios from "axios";
import Skills from '~/components/Skills.vue'
import Links from '~/components/Links.vue'
import BlogPosts from '~/components/Blog.vue'
import StackOverflow from '~/components/StackOverflow.vue'

var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

document.documentElement.style.setProperty('primary', randomColor);
export default {
   components: {
    Skills,
    Links,
    BlogPosts,
    StackOverflow
  }, metaInfo: {
    title: 'FullStack Engineer',
   
  }

};
</script>
