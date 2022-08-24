import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "@/components/pages/Tarefas.vue";
import Projetos from "@/components/pages/Projetos.vue";
import Formulario from "@/components/pages/Projetos/Formulario.vue";
import Lista from "@/components/pages/Projetos/Lista.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas,
  },
  {
    path: "/projetos",
    component: Projetos,
    children: [
      { path: "", name: "Projetos", component: Lista },
      { path: "novo", name: "Novo Projeto", component: Formulario },
      {
        path: ":id",
        name: "Editar Projeto",
        component: Formulario,
        props: true,
      },
    ],
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
