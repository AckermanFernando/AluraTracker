<template>
  <div class="card">
    <header class="card-header is-align-items-center">
      <div class="card-header-title column is-two-fifths">
        {{ titulo }}
      </div>
      <!-- <div class="card-header-title column is-one-quarter">
        outra coisa
      </div> -->
      <div class="card-header-title is-one-quarter is-justify-content-end">
        <Cronometro :tempoEmSegundos="this.tempo"/>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue"
// import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "Tarefa",
  components: {
    Cronometro
    // Temporizador,
  },
  props:{
      titulo:{
          type: String,
          default: ''
      },
      tempo: {
          type: Number,
          default: 0
      }
  },
// '   data() {
//      return {
//        titulo1: this.titulo,
//      };
//    },'
//   methods:{
//       criarTarefa(titulo: string, tempo: number){
//         const novaTarefa = new Temporizador(titulo, tempo)
//       }
//   }
});
</script>

<style scoped>

</style>
