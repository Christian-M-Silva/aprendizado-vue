import { defineComponent } from "vue";


export default defineComponent({
  data() {
    return {
    };
  },

  created() {
      console.log(this.$store.state.count)
  },

  methods:{
    changeValue(isIncrement: boolean){
      this.$store.dispatch('updateValueAfter', isIncrement)
      console.log(this.$store.getters.showAlert)
    }
  }
});