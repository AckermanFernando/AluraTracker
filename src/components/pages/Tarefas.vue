<template>
  <div class="formulario">
    <Formulario class="position" @aoSalvarTarefa="salvarTarefa" />
  </div>
  <div>
    <ul>
      <li v-for="(tarefa, index) in tarefas" v-bind:key="index" class="lista">
        <Tarefa :tarefa="tarefa" />
      </li>
    </ul>
  </div>
  <div v-if="listaEstaVazia" class="tela-vazia">
    <TelaVazia />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Formulario from "@/components/organisms/Formulario.vue";
import Tarefa from "@/components/organisms/Tarefa.vue";
import ITarefa from "@/interfaces/ITarefa";
import TelaVazia from "@/components/atoms/TelaVazia.vue";

export default defineComponent({
  name: "Tarefas",
  components: {
    Formulario,
    Tarefa,
    TelaVazia,
  },
  data() {
    return {
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
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>

<style scoped>
/* .formulario {
  position: inherit;
}
.position {
  position: fixed;
} */
.tela-vazia {
  padding: 1.5rem;
}
.lista {
  padding: 0.5rem;
}
</style>
