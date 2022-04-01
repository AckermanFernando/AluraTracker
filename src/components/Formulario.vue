<template>
  <div class="box">
    <div class="columns is-flex is-align-items-center">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          v-model="newTarefa"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
        <!-- <Temporizador /> -->
      </div>

      <!-- <button class="button button-blue" @click="novaTarefa">Cadastrar</button> -->
    </div>
  </div>
  <div v-if="modal">
    <Alert />
  </div>
  <div class="column" v-if="this.tarefas">
    <ul>
      <li v-for="tarefa in tarefas" v-bind:key="tarefa.title">
        <Tarefa :titulo="tarefa.titulo" :tempo="tarefa.tempo" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";
import Tarefa from "./Tarefa.vue";
import Alert from "./Alert.vue"
// import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Formulario",
  data() {
    return {
      newTarefa: "",
      tempoEmSegundos: "",
      tarefas: [] as any,
      modal: "",
    };
  },
  components: {
    Temporizador,
    Tarefa,
    Alert,
    //Cronometro,
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      if (this.newTarefa != "") {
        this.tarefas.push({
          titulo: this.newTarefa,
          tempo: tempoDecorrido,
        });
        this.newTarefa = "";
        console.log(this.tarefas);
      } else {
        this.modal = "is-active";
        setTimeout(() => {
          this.modal = "";
        }, 4000);
      }
    },
  },
  mounted() {
    console.log(this.tarefas);
  },
});
</script>

<style scoped>
.button-blue {
  background-color: #0d3b66;
  color: #fff;
}
</style>
