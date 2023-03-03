<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto pt-12"
    max-width="800"
    width="100%"
  >
    <div>
      <h2 class="text-h4 font-weight-black">404 - Page non trouvée</h2>

      <div class="text-h5 font-weight-medium mb-2">
        Une erreur est survenue durant la navigation
      </div>

      <p class="text-body-2 mb-4">
        Pas de panique, vous pouvez revenir à la page d'accueil
      </p>

      <v-btn variant="text" to="/">Retour à l'accueil</v-btn>
    </div>
  </v-sheet>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  head() {
    return {
      title: '404',
    }
  },
}
</script>
