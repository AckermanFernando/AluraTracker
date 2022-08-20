<template>
  <Box>
    <div
      class="column is-5"
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
    <div
      class="column is-3"
      role="form"
      arial-label="Select para selecionar projeto"
    >
      <div class="select">
        <select v-model="idProjeto">
          <option
            :value="projeto.id"
            v-for="projeto in projetos"
            :key="projeto.id"
          >
            {{ projeto.nome }}
          </option>
        </select>
      </div>
    </div>
    <div class="column">
      <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
    </div>
  </Box>
  <!-- <div v-if="modal">
    <Alert />
  </div> -->
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Temporizador from "@/components/organisms/Temporizador.vue";
import Box from "@/components/atoms/Box.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Formulario",
  emits: ["aoSalvarTarefa"],
  data() {
    return {
      newTarefa: "",
      tempoEmSegundos: "",
      modal: false,
      controleTituloTarefaPadrao: 0,
      idProjeto: "",
    };
  },
  components: {
    Temporizador,
    Box,
    // Alert,
    //Cronometro,
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      if (this.idProjeto) {
        console.log("id do projeto", this.idProjeto);
        this.$emit("aoSalvarTarefa", {
          duracaoEmSegundos: tempoDecorrido,
          descricao: this.newTarefa
            ? this.newTarefa
            : "Tarefa " + ++this.controleTituloTarefaPadrao,
          projeto: this.projetos.find((proj) => proj.id == this.idProjeto),
        });
        this.newTarefa = "";
        this.idProjeto = "";
      } else {
        alert("É necessário escolher um projeto para a sua tarefa!");
      }
    },
  },
  setup() {
    const store = useStore(); // useStore() == this.$store
    return {
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

<style>
.button-blue {
  background-color: #0d3b66;
  color: #fff;
}
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
