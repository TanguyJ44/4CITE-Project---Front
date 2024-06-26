<template>
  <div class="py-4">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="500"
      rounded="lg"
    >
      <v-form v-model="formIsValid" @submit.prevent="loginUser">
        <h1 class="display-1 font-weight-light pb-4">Mon compte</h1>

        <v-alert v-if="alert" density="compact" type="error" closable>
          Email ou mot de passe incorrect !
        </v-alert>

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

          <a
            class="text-caption text-decoration-none text-blue"
            rel="noopener noreferrer"
          >
            Mot de passe oublié ?</a
          >
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
          Se connecter
        </v-btn>
      </v-form>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="register"
          rel="noopener noreferrer"
        >
          Pas encore inscrit ?
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
    email: null,
    password: null,
    formIsValid: false,
    alert: false,
    rules: {
      required: (value) => !!value || 'Ce champ est obligatoire',
      minPassword: (value) =>
        (value && value.length >= 6) ||
        'Le mot de passe doit faire au moins 6 caractères',
      emailMatch: (value) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        'Veuillez entrer une adresse email valide',
    },
  }),
  methods: {
    async loginUser() {
      this.alert = false
      const user = await this.$axios
        .$post('user/login', {
          email: this.email,
          password: this.password,
        })
        .catch(() => {
          this.alert = true
        })
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        this.$router.push('/dashboard/user/booking')
      }
    },
  },
}
</script>
