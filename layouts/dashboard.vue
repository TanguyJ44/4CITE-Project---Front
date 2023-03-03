<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list-item v-if="!miniVariant">
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Mon espace </v-list-item-title>
          <v-list-item-subtitle> Akkor Hôtel </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="miniVariant">
        <v-list-item-content>
          <v-list-item-title class="text-h6">🏠</v-list-item-title>
          <v-spacer />
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="pr-5" :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>Mon espace</v-toolbar-title>
      <v-btn id="logout">
        Déconnexion
        <v-icon color="red" right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      miniVariant: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Mes réservations',
          to: '/dashboard/user/booking',
        },
        {
          icon: 'mdi-account',
          title: 'Mon profil',
          to: '/dashboard/user/profil',
        },
      ],
    }
  },
}
</script>

<style>
#logout {
  position: absolute;
  right: 0;
}
</style>
