<template>
  <header>
    <h1><img src="@/assets/logo.png" alt="logo alura-tracker" /></h1>
    <Botao
      @click="AlternarModo"
      :icone="'fa-solid ' + alternarIcone"
      :estilo="'is-rounded ' + alternarCor"
    />
    <nav class="panel mt-5">
      <ul>
        <li v-for="(rota, index) in rotas" :key="index + rota.nome">
          <router-link :to="rota.link">
            <i :class="rota.icone"></i> {{ rota.nome }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Botao from "@/components/atoms/Botao.vue";

// interface IRota {
//   nome: string,
//   link
// }

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
      alternarCor: "is-black",
      rotas: ref([
        {
          icone: "fas fa-project-diagram",
          nome: "Projetos",
          link: "projetos",
        },
        { icone: "fas fa-tasks", nome: "Tarefas", link: "/" },
      ]),
    };
  },
  methods: {
    AlternarModo() {
      this.alternarIcone == "fa-sun"
        ? ((this.alternarIcone = "fa-moon"), (this.alternarCor = "is-white"))
        : ((this.alternarIcone = "fa-sun"), (this.alternarCor = "is-black"));
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

header a {
  /* text-decoration: none; */
  color: antiquewhite;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

.panel li {
  color: #fff;
}
.link {
  color: #fff;
}

.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
</style>
