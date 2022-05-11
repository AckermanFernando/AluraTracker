<template>
  <button
    class="button"
    :class="estilo"
  >
    <span class="icon">
      <i :class="icone"></i>
    </span>
    <span>{{ descricao }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Botao",
  props: {
    icone: {
      type: String,
      default: "fas fa-play",
    },
    estilo: {
      type: String,
      default: "is-success is-inverted",
    },
    descricao: {
      type: String,
    },
  },
});
</script>
