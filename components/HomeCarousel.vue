<template>
  <v-carousel v-model="model" hide-delimiters cycle>
    <v-carousel-item
      v-for="(img, i) in imgs"
      :key="i"
      :src="img"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'HomeCarousel',
  data: () => ({
    model: 0,
    imgs: [
      'https://www.oceaniahotels.com/media/cache/slideshow/media/upload/24384d3078a4356c33fe2e1cd3beaa86/1/1800x/ql2edd/70/hotel-4-etoiles-dijon-oceania-le-jura-chambre-deluxe-double-avec-peignoirs.jpg',
      'https://img.ev.mu/images/hotels/43675/1605x642/580016.jpg',
    ],
  }),
}
</script>
