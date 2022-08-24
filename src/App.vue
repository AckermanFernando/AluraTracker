<template>
  <main
    class="columns is-gapless is-multiline main-content"
    :class="{ 'modo-escuro': modoNoturno }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @AlternarModo="alternarModo" />
    </div>
    <div class="column is-three-quarter conteudo">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/organisms/BarraLateral.vue";
import ITarefa from "./interfaces/ITarefa";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
  },
  data() {
    return {
      modoNoturno: false,
      tarefas: [] as ITarefa[],
      // tarefas: [{
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },{
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },
      // {
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },
      // {
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },
      // {
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },
      // {
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },
      // {
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },{
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },{
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },{
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },{
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },{
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },{
      //   duracaoEmSegundos: 120,
      //   descricao: 'Tarefa 1'
      // },
      // ] as ITarefa[],
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    alternarModo() {
      // this.modoNoturno ? (this.modoNoturno = false) : (this.modoNoturno = true);
      this.modoNoturno = !this.modoNoturno;
    },
  },
});
</script>

<style scoped>
.main-content {
  min-height: 100vh;
  /* height: 100vh; */
}
.main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
  min-height: 100vh;
}
</style>
