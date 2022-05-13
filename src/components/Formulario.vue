<template>
  <div class="box formulario">
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
  <!-- <div v-if="modal">
    <Alert />
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";
// import Alert from "./Alert.vue"

export default defineComponent({
  name: "Formulario",
  emits: ['aoSalvarTarefa'],
  data() {
    return {
      newTarefa: "",
      tempoEmSegundos: "",
      modal: false,
      quantidadeDeTarefas: 0
    };
  },
  components: {
    Temporizador,
    // Alert,
    //Cronometro,
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      if (this.newTarefa != "") {
        this.$emit('aoSalvarTarefa', {duracaoEmSegundos: tempoDecorrido, descricao: this.newTarefa})
        ++this.quantidadeDeTarefas
     } else {
        this.$emit('aoSalvarTarefa', {duracaoEmSegundos: tempoDecorrido, descricao: 'Tarefa ' + ++this.quantidadeDeTarefas}) 
      }
      this.newTarefa = "";
    },
  },
});
</script>

<style >
.button-blue {
  background-color: #0d3b66;
  color: #fff;
}
.formulario{
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
