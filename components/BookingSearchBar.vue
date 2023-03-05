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
              :search-input.sync="search"
              hide-no-data
              hide-selected
              append-icon=""
              item-text="city"
              item-value="city"
              label="Ville de séjour"
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
            <v-btn
              color="secondary"
              block
              rounded
              large
              @click="redirectToSearch"
              >Rechercher</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-snackbar v-model="snackbar" timeout="5000" color="red">
      Merci d'indiquer une ville de séjour pour valider votre recherche !
    </v-snackbar>
  </v-sheet>
</template>

<script>
import moment from 'moment'
export default {
  data: () => ({
    todayDate: moment().format('YYYY-MM-DD'),
    arrivalDate: moment().format('YYYY-MM-DD'),
    departureDate: moment().add(1, 'days').format('YYYY-MM-DD'),
    entries: [],
    model: null,
    search: null,
    snackbar: false,
  }),
  computed: {
    items() {
      return this.entries.map((entry) => {
        const city = entry.city
        return Object.assign({}, entry, { city })
      })
    },
  },
  watch: {
    search(val) {
      if (this.items.length > 0) return

      this.$axios.get('findHotels').then((res) => {
        this.entries = res.data
      })
    },
  },
  methods: {
    getNextDay(date) {
      const newDate = new Date(date)
      const nextDay = newDate.setDate(newDate.getDate() + 1)
      return moment(nextDay).format('YYYY-MM-DD')
    },
    redirectToSearch() {
      if (!this.model) {
        this.snackbar = true
        return
      }
      this.$router.push({
        path: '/search',
        query: {
          city: this.model.city,
          arrivalDate: this.arrivalDate,
          departureDate: this.departureDate,
        },
      })
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
