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
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      fixed: false,
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
