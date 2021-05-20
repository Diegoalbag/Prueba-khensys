<template>
  <div class="History pt-5">
    <h1 class="text-center text-dark text-uppercase display-3 mb-5">Historial de ponches</h1>
    <!-- <p class="text-center" v-for="log, index in getLog" :key="index">{{logMessage(log)}}</p> -->
    <div class="container w-50">
        <ul class="list-group">
            <li class="list-group-item" v-for="log, index in getLog" :key="index">{{logMessage(log)}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['getLog']),
        logMessage(){
            return (log) => {
                return `${log.name} en la fecha ${log.date} a las ${log.time} de tipo ${log.type}`
            }
        }
    },
}
</script>

<style>
.History{
    height: 100vh;
}
</style>