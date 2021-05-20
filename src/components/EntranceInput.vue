<template>
  <div class="ClockedIn bg-white rounded-3 p-5">
      <h1 class="text-center mb-5 display-4">Ponche de Entrada</h1>
    <form @submit.prevent="submitForm">
    <div class="mb-3">
        <label class="form-label">Nombre del empleado</label>
        <input type="text" class="form-control" placeholder="Nombre del empleado" v-model="name">
    </div>
    <div class="mb-3">
        <label class="form-label">Fecha</label>
        <input type="text" class="form-control" :value="date.toLocaleDateString()" disabled>
    </div>
    <div class="mb-3 d-flex justify-content-center">
        <button class="btn btn-primary text-center">Entrar</button>    
    </div>
    </form>
  </div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { mapMutations } from "vuex";

export default {
    setup () {
        return{
            v$: useValidate()   
        } 
    },
    data() {
        return {
            name: '',
            date: new Date(),
        }
    },
    validations() {
        return {
            name: { required },
            date: { required },
        }
    },
    methods: {
        ...mapMutations(['ChangeName', 'EntranceFalse','UpdateLog']),
        submitForm(){
            this.v$.$validate()
            if(!this.v$.$invalid){
                this.ChangeName(this.name)
                this.EntranceFalse()
                this.UpdateLog({
                    date: this.date.toLocaleDateString(),
                    time: this.date.toLocaleTimeString(),
                    type: 'Entrada'
                });
            }else{
                alert('Porfavor complete todos los campos')
            }
        }
    }
}
</script>

<style>
.ClockedIn{
    height: 30rem;
    width: 40rem;
}
</style>