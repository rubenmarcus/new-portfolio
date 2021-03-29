    <template>
  <div class="about mt-80">
    <div class="container">
      
      <span>Olá, eu sou um</span>
   
      <br />
      <div :class="message">
        <span class="link-highlight">
               <ClientOnly>
          <vue-typer
            :text='[
      "software engineer",
      "frontend specialist",
      "angular developer",
      "react developer",
      "vuejs developer"
    ]'
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="70"
            :type-delay="70"
            :pre-erase-delay="2000"
            :erase-delay="250"
            erase-style="select-all"
            :erase-on-complete="false"
            caret-animation="blink"
            @typed="onTyped"
          ></vue-typer>


             </ClientOnly>
        </span>
      </div>

      <span>de São Paulo, Brasil.</span>

      <br />
      <img src="../img/me.jpg" />
    </div>
  </div>
</template>


    <script>


let message;

export default {
  name: "Open",
  mounted() {
    this.message = "";
  },
  data() {
    return {
      message: "type-software"
    };
  },
  methods: {
    onTyped: function(typedString) {
      // handle typed string

      setTimeout(() => {
        switch (typedString) {
          case "software engineer":
            this.message = "type-front";
            break;
          case "frontend specialist":
            this.message = "type-angular";
            break;
          case "angular developer":
            this.message = "type-react";
            break;
          case "react developer":
            this.message = "type-vue";
            break;
          case "vuejs developer":
            this.message = "type-software";
            break;
        }
      }, 2400);
    }
  },
};
</script>