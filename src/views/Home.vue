<template>
  <div class="home container d-flex justify-content-center align-items-start pt-5">
    <component :is="currentComponent"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EntranceInput from '../components/EntranceInput.vue';
import BreakExitInput from '../components/BreakExitInput.vue';
import ComebackInput from '../components/ComebackInput.vue';
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    EntranceInput,
    BreakExitInput,
    ComebackInput
  },
  computed: {
    ...mapGetters(['isentranceLoggedIn','isOnBreak','isOnLunch']),
    currentComponent(){
      let component = ''
      if(!this.isentranceLoggedIn){
        component =  'EntranceInput'
      }else if(this.isentranceLoggedIn && !this.isOnBreak && !this.isOnLunch){
        component = 'BreakExitInput'
      }else if(this.isOnBreak || this.isOnLunch){
        component = 'ComebackInput'
      }
      return component
    }
  },
}
</script>

<style lang="scss" scoped>
.home{
  height: 100vh;
}
</style>
