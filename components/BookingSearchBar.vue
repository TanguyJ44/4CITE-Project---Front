<template>
  <v-sheet class="pa-4">
    <v-form>
      <v-container>
        <v-row class="pa-6">
          <h2>Trouvez votre hôtel au meilleur prix garanti !</h2>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              label="Nom d'Hôtel"
              filled
              rounded
              dense
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              label="Date d'arrivée"
              type="date"
              :value="currentDate"
              filled
              rounded
              dense
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              label="Date de départ"
              type="date"
              :value="tomorrowDate"
              filled
              rounded
              dense
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-btn color="secondary" rounded large>Rechercher</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    currentDate: new Date().toISOString().substr(0, 10),
    tomorrowDate: new Date(new Date().setDate(new Date().getDate() + 1))
      .toISOString()
      .substr(0, 10),
  }),
}
</script>

<style scoped>
h2 {
  margin: 0 auto;
  text-align: center;
  font-size: xx-large;
}
</style>
