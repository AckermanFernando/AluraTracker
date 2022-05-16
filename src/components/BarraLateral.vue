<template>
  <header>
    <h1><img src="../assets/logo.png" alt="logo alura-tracker" /></h1>
    <Botao
      @click="AlternarModo"
      :icone="'fa-solid ' + alternarIcone"
      :estilo="'is-rounded ' + alternarCor"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Botao from "./Botao.vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["AlternarModo"],
  // props:{

  // },
  components: {
    Botao,
  },
  data() {
    return {
      alternarIcone: "fa-sun",
      alternarCor: "is-black"
    };
  },
  methods: {
    AlternarModo() {
      this.alternarIcone == "fa-sun"
        ? (this.alternarIcone = "fa-moon", this.alternarCor = "is-white")
        : (this.alternarIcone = "fa-sun", this.alternarCor = "is-black");
      this.$emit("AlternarModo");
    }, 
  },
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100%;
  /* min-height: 100vh; */
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
