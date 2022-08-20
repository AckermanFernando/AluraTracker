<template>
  <div class="box formulario">
    <div class="columns is-flex is-align-items-center">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Box",
  emits: ["valorDoInput"],
  props: {
    label: {
      type: String,
      default: " ",
    },
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
