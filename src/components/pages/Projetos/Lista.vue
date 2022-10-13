<template>
  <div
    class="modal"
    :class="{ 'is-active': showModal, 'is-clipped': !showModal }"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Tem certeza que deseja remover o item?</p>
        <button
          class="delete"
          aria-label="close"
          @click="fecharModal()"
        ></button>
      </header>
      <section class="modal-card-body">
        <p>Essa ação não podera ser desfeita!</p>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-danger" @click="apagar()">
          Remover Projeto
        </button>
        <button class="button" @click="fecharModal()">Cancel</button>
      </footer>
    </div>
  </div>
  <section>
    <router-link to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do projeto</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>

          <td>
            {{ projeto.nome }}
          </td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button
              class="button ml-2 is-danger"
              @click="abrirModal(projeto.id)"
            >
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Lista",
  data() {
    return { showModal: false, idProjeto: "" };
  },
  methods: {
    abrirModal(id: string) {
      this.showModal = true;
      this.idProjeto = id;
    },
    fecharModal() {
      this.showModal = false;
      this.idProjeto = "";
    },
    apagar() {
      this.store.commit("REMOVE_PROJETO", this.idProjeto);
      this.fecharModal();
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
