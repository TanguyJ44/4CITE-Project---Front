<template>
  <div>
    <v-sheet v-for="hotel in hotels" :key="hotel">
      <HotelCard :hotel="hotel" :is-reserved="true" />
    </v-sheet>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      hotels: [
        {
          name: 'Hotel 1',
          description: 'Description 1',
          location: "Location 1",
          city: "City 1",
          pictureList: ['https://img.freepik.com/premium-vector/hotel-logo-simple-illustration_434503-736.jpg?w=2000'],
        },
        {
          name: 'Hotel 2',
          description: 'Description 2',
          location: "Location 2",
          city: "City 2",
          pictureList: ['https://img.freepik.com/premium-vector/hotel-logo-simple-illustration_434503-736.jpg?w=2000'],
        },
      ],
    }
  },
  head() {
    return {
      title: 'Mes réservations',
    }
  },
}
</script>
