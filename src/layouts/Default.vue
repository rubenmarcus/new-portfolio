<template>
  <div>
    <header class="flex">
      <div class="container justify-left">
      <strong>
        <g-link to="/">Ruben Marcus</g-link>
      </strong>
      <nav class="nav">
        <h1>FullStack Engineer</h1>
      </nav>
      <div class="about">
        <p>
          Olá meu nome é Ruben Marcus, sou um desenvolvedor Full Stack focado em
          Front-end que trabalho atualmente na
          <a href="https://www.zup.com.br"> ZUP</a>
        </p>
      </div>
      </div>
    </header>
    <slot />
  </div>
</template>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  height: 100vh;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#00b7ea+0,009ec3+100;Blue+3D+%2315 */
  background: #001c69; /* Old browsers */
}
.mid-width {
  width: 47%;
}
.full-width {
  width: 100%;
}
a {
  text-decoration: none;
  color: aliceblue;
}
a:hover {
  color: aqua;
}
.about a {
  color: aqua;
}
.about a:hover {
  color: white;
}
.about p {
  color: #fff;
  font-size: 25px;
}
.skills h1 {
  width: 100%;
  padding-left: 20px;
  color: #fff;
  /* text-align: center; */
}
.clients{ width:80%;}
.clients span{
  color:#fff;
  padding-right:5px;
  display:inline-block;
}
.clients span:nth-child(1){
  font-size:26px;
}

.clients span:nth-child(2){
  font-size:22px;
}
.clients span:nth-child(3){
  font-size:18px;
}
.clients span:nth-child(4){
  font-size:14px;
}
.clients span:nth-child(5){
  font-size:14px;
}


nav{
  /* margin-left:20px; */
}
nav h1 {
    line-height: 0px;
}
header{
  padding-top: 24px!important;
     background: #021a50;
}
.align-top{
     align-self: flex-start;
}
h1 svg {
    width: 35px!important;
    height: 29px!important;
    margin-right: 10px;
    position: relative;
    top: 9px;
}
/* .bg-purple{
  
  background: #00388c;
} */
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
}
.icons svg {
    width: 35px;
    height: 56px;
    margin-right: 30px;
    margin-bottom: 10px;
}
.icons-mid svg {
  width: 25px;
  height: 45px;
  margin-right: 30px;
}
/* .skills svg:nth-child(8n) {
    margin-right: 0px;
} */
.justify-left{
  justify-content: left;
}
.about p {
  color: #fff;
  font-size: 22px;
  font-weight: 100;
}
h1 {
  color: aqua;
  font-size: 14px;
}
li {
  color: #fff;
  font-size: 12px;
}
.container {
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
