<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="10">
        <BookingSearchBar />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <HomeCarousel />
      </v-col>
    </v-row>
    <v-row class="pa-6" justify="center" align="center">
      <v-col cols="10">
        <HomeTimeline />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  head() {
    return {
      title: 'Accueil',
    }
  },
}
</script>
