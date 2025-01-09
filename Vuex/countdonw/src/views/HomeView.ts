import { defineComponent } from "vue";


export default defineComponent({
  data() {
    return {
    };
  },

  created() {
      console.log(this.$store.state.count)
  },
});