<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 pr-4>
        <v-card class="mt-5 mb-8">
          <v-card-title class="justify-center">
            <h2 class="headline mb-0">Filtres</h2>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card class="pa-2" outlined tile> Column </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
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
            <v-container fluid>
              <v-row>
                <v-col cols="3" pa-0 ma-0>
                  <v-img
                    src="https://www.ahstatic.com/photos/1394_ho_00_p_346x260.jpg"
                    height="150"
                    rounded="lg"
                    cover
                  ></v-img>
                </v-col>

                <v-col cols="7">
                  <h3 class="mb-4">Mercure Nantes Centre - Grand Hôtel</h3>
                  <p class="mb-4">
                    Bienvenue au Mercure Nantes Centre Grand Hôtel situé au
                    coeur de la Cité des Ducs de Bretagne. Profitez de notre
                    emplacement privilégié pour flâner à travers les rues
                    piétonnes et découvrir les principaux sites touristiques de
                    la ville.
                  </p>
                  <p class="mb-4 font-italic">
                    <v-icon class="mr-2">mdi-map-marker</v-icon
                    >Nantes Centre - France
                  </p>
                </v-col>
                <v-col cols="2">
                  <v-btn
                    block
                    class="text-none"
                    color="secondary"
                    variant="flat"
                    rounded
                  >
                    Réserver
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
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
