<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="labek">{{ titulo }}</label>
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
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Botao from "@/components/atoms/Botao.vue";
import { useStore } from "@/store";
import IProjeto from "@/interfaces/IProjeto";

export default defineComponent({
  name: "Projetos",
  props: {
    id: {
      type: String,
    },
  },
  components: {
    Botao,
  },
  data() {
    return {
      titulo: "Novo projeto",
      nomeDoProjeto: "",
    };
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (item) => item.id == this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
      this.titulo = "Editar Projeto";
    }
  },

  methods: {
    salvar() {
      if (this.nomeDoProjeto) {
        if (this.id) {
          let projetoEditado = {
            id: this.id,
            nome: this.nomeDoProjeto,
          } as IProjeto;
          this.store.commit("EDITA_PROJETO", projetoEditado);
        } else {
          this.store.commit("ADICIONA_PROJETO", this.nomeDoProjeto);
        }
        this.nomeDoProjeto = "";
        this.$router.push("/projetos");
      } else {
        alert("Impossível salvar uma tarefa sem título bro :(");
      }
    },
  },
  setup(props) {
    const store = useStore();
    return {
      store,
      projeto: computed(() =>
        store.state.projetos.map((item) => (item.id == props.id ? item : ""))
      ),
    };
  },
});
</script>
