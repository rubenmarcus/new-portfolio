    <template>
  <div class="about mt-80">
    <div class="container">
      Hello, I am a
      <br />
      <div :class="message">
        <span class="link-highlight">
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
        </span>
      </div>
      <span>from São Paulo, Brazil.</span>
      <br />
      <img src="../img/me.jpg" />
    </div>
  </div>
</template>


    <script>
import { VueTyper } from "vue-typer";

let message;

export default {
  name: "Open",
  components: {
    VueTyper
  },
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

      console.log(typedString, "typed");

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
  created() {
    // setInterval(() => {    for (i = 0; i < arrayClass.length; i++) {    this.message = arrayClass[i];  console.log('message', this.message, arrayClass[i]);  }}, 5000);
    // var i = -1;
    // console.log(arrayClass.length);
    // const call = () => {
    //   i++;
    //   console.log(arrayClass[i], i);
    //   self.message = arrayClass[i];
    //   if (i == arrayClass.length - 1) {
    //     i = -1;
    //     clearInterval();
    //   }
    // };
    // setInterval(call, 2500);
    //         for (i = 0; i < arrayClass.length; i) {
    //      setInterval(function(){
    //             //  self.message = arrayClass[i]
    //               console.log (i, arrayClass[i]);
    //                 i++
    // }, 1500);   }
    //   arrayClass.forEach(cssClass => {
    //         setInterval(() => {
    //             console.log(cssClass, 'ss')
    //             setTimeout(() => {    this.message = cssClass }, 5300)
    //             console.log('message', this.message, arrayClass[cssClass])
    //         }, 300);
    // });
  }
};
</script>