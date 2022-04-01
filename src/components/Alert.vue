<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    alerta() {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Você não adicionou um título a sua tarefa",
          text: "Se clicar em descartar a tarefa não será salva!",
          icon: "error",
          showCancelButton: true,
          confirmButtonText: "Continuar",
          cancelButtonText: "Descartar",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Descartada",
              "Sua tarefa foi descartada.",
              "success"
            );
          } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Descartada",
              "Sua tarefa foi descartada!",
              "error"
            );
          }
        });
    },
  },
  mounted() {
    this.alerta();
  },
};
</script>
