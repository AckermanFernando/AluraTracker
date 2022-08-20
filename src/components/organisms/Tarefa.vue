<template>
  <div class="card tarefa">
    <header class="card-header is-align-items-center">
      <div class="card-header-title column is-two-fifths">
        {{ tarefa.descricao }}
      </div>
      <div class="card-header-title column is-two-fifths">
        {{ tarefa.projeto.nome }}
      </div>
      <div class="card-header-title is-one-quarter is-justify-content-end">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import ITarefa from "@/interfaces/ITarefa";
import { defineComponent, PropType } from "vue";
import Cronometro from "@/components/atoms/Cronometro.vue";

export default defineComponent({
  name: "Tarefa",
  components: {
    Cronometro,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
