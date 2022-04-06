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
      </div>
    </div>
  </div>
  <div v-if="modal">
    <Alert />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";
import Alert from "./Alert.vue"

export default defineComponent({
  name: "Formulario",
  emits: ['aoSalvarTarefa'],
  data() {
    return {
      newTarefa: "",
      tempoEmSegundos: "",
      tarefas: [] as any,
      modal: false
    };
  },
  components: {
    Temporizador,
    Alert,
    //Cronometro,
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {

      if (this.newTarefa != "") {
        this.$emit('aoSalvarTarefa', {duracaoEmSegundos: tempoDecorrido, descricao: this.newTarefa}), 
        this.newTarefa = "";
        console.log(this.tarefas);
      } else {
        this.modal = true;
         setTimeout(() => {
           this.modal = false
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
