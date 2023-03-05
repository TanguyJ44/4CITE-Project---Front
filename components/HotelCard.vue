<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3" pa-0 ma-0>
        <v-img
          :src="hotel.pictureList[0]"
          height="150"
          rounded="lg"
          cover
        ></v-img>
      </v-col>

      <v-col cols="7">
        <h3 class="mb-4">{{ hotel.name }}</h3>
        <p class="mb-4">
          {{ hotel.description }}
        </p>
        <p class="mb-4 font-italic">
          <v-icon class="mr-2">mdi-map-marker</v-icon>{{ hotel.location }} -
          {{ hotel.city }}
        </p>
      </v-col>
      <v-col cols="2">
        <v-btn
          v-if="!isReserved"
          block
          class="text-none"
          color="secondary"
          variant="flat"
          rounded
          @click="bookHotel(hotel._id)"
        >
          Réserver
        </v-btn>
        <v-btn
          v-if="isReserved"
          block
          class="text-none"
          color="error"
          variant="flat"
          rounded
        >
          Annuler
        </v-btn>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" timeout="5000" color="red">
      Vous devez être connecté pour réserver un hôtel !
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      default: () => ({}),
    },
    isReserved: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    snackbar: false,
  }),
  methods: {
    bookHotel(id) {
      if (!localStorage.getItem('user')) {
        this.snackbar = true
      }
    },
  },
}
</script>
