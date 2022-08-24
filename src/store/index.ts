import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vuexVueStore } from "vuex";
import { InjectionKey } from "vue";

interface Estado {
  projetos: IProjeto[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
  },
  mutations: {
    ADICIONA_PROJETO(state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      } as IProjeto;
      state.projetos.push(projeto);
    },
    EDITA_PROJETO(state, projeto: IProjeto) {
      state.projetos.map((item) => {
        if (item.id == projeto.id) item.nome = projeto.nome;
      });
    },
  },
});
export function useStore(): Store<Estado> {
  return vuexVueStore(key);
}
