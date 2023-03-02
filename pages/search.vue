<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 pr-4>
        <v-card class="mt-5 mb-8 pa-4">
          <v-card-title class="justify-center">
            <h2 class="headline mb-0">Filtres</h2>
          </v-card-title>
          <v-card-text>
            <v-col cols="12">
              <v-card class="pa-2" outlined tile> Column </v-card>
            </v-col>
            <v-col cols="12">
              <v-card class="pa-2" outlined tile> Column </v-card>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Filtrer par emplacement"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                type="number"
                label="Nombre d'hôtel à afficher"
              ></v-text-field>
            </v-col>
          </v-card-text>
          <v-card class="mb-8" color="surface-variant" variant="tonal">
            <v-card-text class="text-medium-emphasis text-caption">
              💡Utiliser les filtres ci-dessus pour affiner votre recherche et
              trouver l'hôtel qui vous correspond le mieux 😊
            </v-card-text>
          </v-card>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md8>
        <v-card class="mt-5 mb-8 pa-4">
          <v-card-title class="justify-center mb-4">
            <h2 class="headline mb-0">Rechercher un hôtel</h2>
          </v-card-title>
          <v-sheet
            v-for="i in 5"
            :key="i"
            rounded="lg"
            class="text-body-2 mx-auto mb-6"
            elevation="4"
          >
            <HotelCard />
          </v-sheet>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Rechercher un hôtel',
    }
  },
}
</script>
