<template>
  <section class="projetos">
    <!-- <h1 class="title">Projetos</h1> -->
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="labek">Nome do Projeto</label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <Botao
          class="button"
          icone="fas fa-check"
          estilo="is-success"
          descricao="Salvar"
          tipo="submit"
        />
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do projeto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>
            {{ projeto.id }}
          </td>

          <td>
            {{ projeto.nome }}
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Botao from "../atoms/Botao.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Projetos",
  components: {
    Botao,
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto);
      this.nomeDoProjeto = "";
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
