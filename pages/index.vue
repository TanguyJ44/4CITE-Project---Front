<template>
  <div>
    <v-row>
      <v-col cols="12">
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
import HomeTimeline from '~/components/HomeTimeline.vue';

export default {
    name: "IndexPage",
    components: { HomeTimeline }
}
</script>
