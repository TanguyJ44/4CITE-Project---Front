<template>
  <v-sheet class="pa-4">
    <v-form>
      <v-container>
        <v-row class="pa-6">
          <h2>Trouvez votre hôtel au meilleur prix garanti !</h2>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-autocomplete
              v-model="model"
              :items="items"
              :loading="isLoading"
              :search-input.sync="search"
              hide-no-data
              hide-selected
              append-icon=""
              item-text="Description"
              item-value="API"
              label="Nom d'Hôtel"
              filled
              rounded
              dense
              required
              return-object
            ></v-autocomplete>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="arrivalDate"
              label="Date d'arrivée"
              type="date"
              :min="todayDate"
              filled
              rounded
              dense
              required
              @change.capture="departureDate = getNextDay(arrivalDate)"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="departureDate"
              label="Date de départ"
              type="date"
              :min="getNextDay(arrivalDate)"
              filled
              rounded
              dense
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2">
            <v-btn color="secondary" block rounded large>Rechercher</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
import moment from 'moment'
export default {
  data: () => ({
    todayDate: moment().format('YYYY-MM-DD'),
    arrivalDate: moment().format('YYYY-MM-DD'),
    departureDate: moment().add(1, 'days').format('YYYY-MM-DD'),
    isLoading: false,
    entries: [],
    model: null,
    search: null,
  }),
  computed: {
    items() {
      return this.entries.map((entry) => {
        const Description = entry.Description
        return Object.assign({}, entry, { Description })
      })
    },
  },
  watch: {
    search(val) {
      if (this.items.length > 0) return

      if (this.isLoading) return

      this.isLoading = true

      fetch('https://api.publicapis.org/entries')
        .then((res) => res.json())
        .then((res) => {
          const { count, entries } = res
          this.count = count
          this.entries = entries
        })
        .finally(() => (this.isLoading = false))
    },
  },
  methods: {
    getNextDay(date) {
      const newDate = new Date(date)
      const nextDay = newDate.setDate(newDate.getDate() + 1)
      return moment(nextDay).format('YYYY-MM-DD')
    },
  },
}
</script>

<style scoped>
h2 {
  margin: 0 auto;
  text-align: center;
  font-size: xx-large;
}
</style>
