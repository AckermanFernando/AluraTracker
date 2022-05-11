<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <Botao  @click="iniciar" :disabled="cronometroRodando" descricao="play"/>
    <!-- <button class="button is-success is-inverted " @click="iniciar" :disabled="cronometroRodando">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button> -->
    <!-- <button class="button is-danger is-inverted" @click="finalizar" :disabled="!cronometroRodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button> -->
    <Botao :estilo="'is-danger is-inverted'" :icone="'fas fa-stop'" :descricao="'stop'" @click="finalizar" :disabled="!cronometroRodando"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
import Botao from "./Botao.vue"

export default defineComponent({
  name: "Temporizador",
  emits: ['aoTemporizadorFinalizado'],
  components: {
    Cronometro,
    Botao
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    };
  },
  methods: {
    iniciar() {
      this.cronometro = setInterval(() => {
        this.cronometroRodando = true;
        this.tempoEmSegundos++;
      }, 1000);
    },
    finalizar() {
        this.cronometroRodando = false
        clearInterval(this.cronometro);
        this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
        console.log(this.tempoEmSegundos)
        this.tempoEmSegundos = 0
        console.log(this.cronometroRodando)
    },
  },
});
</script>
