<template>
  <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
    <div class="pt-4">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        icon="icon"
        variant="text"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </div>

    <div class="pt-0">
      Des expériences, des réductions, de l'inédit ! Vivez des moments
      inoubliables avec Akkor ! Bien plus que des hébergements, des lieux de
      vie. Découvrez nos plus de 5.000 hôtels ! Pour tous les budgets. Sans
      intermédiaires. Annulation Gratuite. Réservez sur votre mobile. Akkor est
      un groupe hôtelier français, qui possède, gère et franchise des hôtels,
      des stations touristiques et résidences de vacances. Akkor est le premier
      groupe hôtelier en Europe et le sixième à l’échelle mondiale.
    </div>

    <v-divider></v-divider>

    <div class="pb-4">
      {{ new Date().getFullYear() }} — <strong>Akkor Hotel</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    }
  },
}
</script>
