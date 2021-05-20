<template>
  <div class="Comeback bg-white rounded-3 p-5">
      <h1 class="text-center mb-5 display-5">Regreso de {{titleType}} </h1>
    <form @submit.prevent="Comeback">
    <div class="mb-3">
        <label class="form-label">Hora de regreso</label>
        <input type="text" class="form-control" :value="time.toLocaleTimeString()" disabled>
    </div>
    <div class="mb-3 d-flex justify-content-center">
        <button class="btn btn-primary text-center">Regresar</button>    
    </div>
    </form>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { mapGetters, mapMutations } from "vuex";

export default {
    setup () {
        return{
            v$: useValidate()   
        } 
    },
    data() {
        return {
            time: new Date(),
        }
    },
    validations() {
        return {
            time: { required },
        }
    },
    computed: {
        ...mapGetters(['isOnBreak','isOnLunch']),
        titleType(){
            let message = ''
            if(this.isOnBreak){
                message = 'Break'
            }else if(this.isOnLunch){
                message = 'Almuerzo'
            }
            return message
        }
    },
    methods: {
        ...mapMutations(['ChangeName', 'EntradaFalse','EndBreakLunch','UpdateLog']),
        Comeback(){
            this.v$.$validate()
            if(!this.v$.$invalid){
                this.UpdateLog({
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                    type: this.isOnLunch ? 'Almuerzo' : 'Break'
                });
                this.EndBreakLunch()
            }else{
                alert('Porfavor insetar la hora de regreso')
            }
        }
    }
}
</script>

<style>
.Comeback{
    height: 30rem;
    width: 40rem;
}
</style>