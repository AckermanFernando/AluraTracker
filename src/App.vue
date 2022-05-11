<template>
  <main class="columns is-gapless is-multiline" :class="this.modoNoturno">
    <div class="column is-one-quarter">
      <BarraLateral @AlternarModo="alternarModo"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div>
        <ul>
          <li
            v-for="(tarefa, index) in tarefas"
            v-bind:key="index"
            class="lista"
          >
            <Tarefa :tarefa="tarefa" />
          </li>
        </ul>
      </div>
          <div v-if="listaEstaVazia" class="tela-vazia">
            <TelaVazia/>
          </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";
import ITarefa from "./interfaces/ITarefa";
import TelaVazia from "./components/TelaVazia.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
    TelaVazia,
  },
  data() {
    return {
      modoNoturno: '',
      tarefas:[] as ITarefa[],
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
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    alternarModo(){
      this.modoNoturno ? this.modoNoturno = '' : this.modoNoturno = 'modo-escuro'
      // if (this.modoNoturno){
      //   this.modoNoturno = 'modo-escuro' 
      // }
    }
  },
});
</script>

<style scoped>
.lista {
  padding: 0.5rem;
}
.tela-vazia {
  padding: 1.5rem;
}
.main {
 --bg-primario: #fff;
 --texto-primario: #000;
}
main.modo-escuro{
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo{
  background-color: var(--bg-primario);
}
</style>
