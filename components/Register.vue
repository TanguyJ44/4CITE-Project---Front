<template>
  <div class="py-4">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="500"
      rounded="lg"
    >
      <v-alert
        v-if="registrationSuccess"
        density="compact"
        type="success"
        closable
      >
        Votre compte a bien été créé ! Vous pouvez maintenant vous connecter.
        <v-btn
          class="mt-2"
          variant="outlined"
          color="white"
          text
          to="login"
          :style="{ border: '1px solid white' }"
        >
          Se connecter
        </v-btn>
      </v-alert>

      <v-form
        v-if="!registrationSuccess"
        v-model="formIsValid"
        @submit.prevent="registerUser"
      >
        <h1 class="display-1 font-weight-light pb-4">Inscription</h1>

        <v-alert v-if="alert" density="compact" type="error" closable>
          Un compte existe déjà avec cette adresse email !
        </v-alert>

        <div class="text-subtitle-1 text-medium-emphasis">Nom</div>

        <v-text-field
          v-model="name"
          :rules="[rules.required, rules.minName]"
          density="compact"
          placeholder="Entrer votre nom"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis">Adresse email</div>

        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.emailMatch]"
          density="compact"
          placeholder="Entrer votre adresse email"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Mot de passe
        </div>

        <v-text-field
          v-model="password"
          :rules="[rules.required, rules.minPassword]"
          type="password"
          density="compact"
          placeholder="Entrer votre mot de passe"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
        ></v-text-field>

        <v-card
          v-if="bookingFlow"
          class="mb-8"
          color="surface-variant"
          variant="tonal"
        >
          <v-card-text class="text-medium-emphasis text-caption">
            💡Une fois connecté, vous serez redirigé vers la page de réservation
            pour terminer celle-ci
          </v-card-text>
        </v-card>

        <v-btn
          type="submit"
          class="mb-2"
          color="primary"
          size="large"
          block
          :disabled="!formIsValid"
        >
          S'inscrire
        </v-btn>
      </v-form>

      <v-card-text v-if="!registrationSuccess" class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="login"
          rel="noopener noreferrer"
        >
          Déjà inscrit ? Connectez-vous
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    bookingFlow: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    name: null,
    email: null,
    password: null,
    formIsValid: false,
    alert: false,
    registrationSuccess: false,
    rules: {
      required: (value) => !!value || 'Ce champ est obligatoire',
      minName: (value) =>
        (value && value.length >= 2) || 'Le nom est trop court',
      minPassword: (value) =>
        (value && value.length >= 6) ||
        'Le mot de passe doit faire au moins 6 caractères',
      emailMatch: (value) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        'Veuillez entrer une adresse email valide',
    },
  }),
  methods: {
    async registerUser() {
      this.alert = false
      await this.$axios
        .$post('user/register', {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .catch(() => {
          this.alert = true
        })
      this.registrationSuccess = true
    },
  },
}
</script>
