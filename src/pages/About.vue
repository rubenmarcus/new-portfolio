<template>
  <Layout>
    <div class="container resume">
      <div class="mt-80">
        <div class="d-flex">
          <div class="picture-info">
                  <img
            src="../img/me.jpg"
           
         
          />
            
            <p> me 13 year old</p>
             <p> pentium 3</p>
             <p> Age of Empires 2</p>
              <p> Anime websites</p>
               <p> Macromedia Dreamweaver 3</p>
                 <p>Sony 17" CRT Monitor</p>
                 <p> Frames, I-Frames and Tables</p>
                       <p> Perl / CGI</p>
                        <p> PHP 4</p>
                            <p> ICQ / mIRC</p>
                              <p> cjb.net</p>
                                       <p> Virtualave, Geocities, Hypermart</p>
             </div>
    



          <div class="text-right" style="width:80%; padding-left:70px; color:#999">
            <h1 style="margin:0px; font-size:48px;">Ruben Marcus</h1>
            <p>or Ruben Marcus Luz Paschoarelli</p>
            <p>31 years old</p>
            <p>8 developer year experience</p>
            <p>does Street Photography, has a collection of historical photos, likes pizza and read about history and philosophy</p>
          </div>
        </div>
      </div>
    </div>
    <div class="about-me p-80">
      <div class="container">

<span>
        Im current working as a Front-end Specialist at Zup Innovation, <br/>
        also acting as Full Stack Engineer, working through the entire pipeline<br/>
        helping the team implement our solution at AWS, dealing with unit tests in React<br/>
        architecturing the front-end with TypeScript and Next.js, customizing our back-end <br/>
        with Node.js and TypeScript, also working with Docker, Serverless and AWS Lambda
      </span>

      </div>
      
    </div>
    <div class="tech-skills p-80">
      <div class="container">
             <Skills />
      </div>
 

    </div>
  </Layout>
</template>

<script>
import Skills from '~/components/Skills.vue'
export default {
     components: {
    Skills,}
};
</script>
