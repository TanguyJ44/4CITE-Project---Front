<template>
  <div class="py-4">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="500"
      rounded="lg"
    >
      <h1 class="display-1 font-weight-light pb-4">Mon profil</h1>

      <div class="text-subtitle-1 text-medium-emphasis">Nom</div>

      <v-text-field
        v-model="name"
        :rules="[rules.required]"
        density="compact"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Adresse email</div>

      <v-text-field
        v-model="email"
        :rules="[rules.required, rules.emailMatch]"
        density="compact"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <v-btn block class="mb-2" color="primary" size="large">
        Mettre à jour
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    rules: {
      required: (value) => !!value || 'Ce champ est obligatoire',
      emailMatch: (value) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        'Veuillez entrer une adresse email valide',
    },
  }),
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.name = user.details.name
    this.email = user.details.email
    this.password = user.details.password
  },
}
</script>
