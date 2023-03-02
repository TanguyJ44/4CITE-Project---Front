<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" pa-0 ma-0>
        <v-img :src="img" height="150" rounded="lg" cover></v-img>
      </v-col>

      <v-col cols="7">
        <h3 class="mb-4">{{ name }}</h3>
        <p class="mb-4">
          {{ description }}
        </p>
        <p class="mb-4 font-italic">
          <v-icon class="mr-2">mdi-map-marker</v-icon>{{ location }}
        </p>
      </v-col>
      <v-col cols="2">
        <v-btn block class="text-none" color="secondary" variant="flat" rounded>
          Réserver
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default:
        'https://img.freepik.com/premium-vector/hotel-logo-simple-illustration_434503-736.jpg?w=2000',
    },
    name: {
      type: String,
      default: 'Hôtel Indisponible',
    },
    description: {
      type: String,
      default: "Cette hôtel n'est pas disponible pour le moment ...",
    },
    location: {
      type: String,
      default: 'Localisation indisponible',
    },
  },
}
</script>
