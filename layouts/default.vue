<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <nuxt-link to="/">
        <v-toolbar-title>🏠 Akkor Hotel</v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <v-btn class="ma-2" color="primary" to="/dashboard/auth/login" rounded>
        <v-icon>mdi-account</v-icon>
        Mon compte
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div class="pt-4">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="text"
        >
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </div>

      <div class="pt-0">
        Des expériences, des réductions, de l'inédit ! Vivez des moments
        inoubliables avec Akkor ! Bien plus que des hébergements, des lieux de
        vie. Découvrez nos plus de 5.000 hôtels ! Pour tous les budgets. Sans
        intermédiaires. Annulation Gratuite. Réservez sur votre mobile. Akkor
        est un groupe hôtelier français, qui possède, gère et franchise des
        hôtels, des stations touristiques et résidences de vacances. Akkor est
        le premier groupe hôtelier en Europe et le sixième à l’échelle mondiale.
      </div>

      <v-divider></v-divider>

      <div class="pb-4">
        {{ new Date().getFullYear() }} — <strong>Akkor Hotel</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      fixed: false,
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    }
  },
}
</script>

<style>
a.nuxt-link-active {
  font-weight: bold;
  text-decoration: none;
  color: black;
}
</style>
