<template>
  <div class="PoncheBreakSalida bg-white rounded-3 p-5">
      <h1 class="text-center mb-5 display-5">Bienvenido, {{getName}}</h1>
    <div class="mb-3 d-flex align-items-between flex-column">
        <button @click="breakAction()" class="btn btn-primary text-center my-2">Break</button>
        <button @click="lunchAction()" class="btn btn-primary text-center my-2">Almuerzo</button>
        <button @click="exitAction()" class="btn btn-danger text-center my-2">Salida</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
    data() {
        return {
            date: new Date(),
        }
    },
    computed: {
        ...mapGetters(['getName']),
    },
    methods: {
        ...mapMutations(['Exit','UpdateLog']),
        ...mapActions(['breakAction','lunchAction']),
        exitAction(){
            this.UpdateLog({
                date: this.date.toLocaleDateString(),
                time: this.date.toLocaleTimeString(),
                type: 'Salida'
            });
            this.Exit()
        }
    }
}
</script>

<style>
.PoncheBreakSalida{
    height: 30rem;
    width: 40rem;
}
</style>