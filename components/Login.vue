<template>
  <div class="py-4">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="500"
      rounded="lg"
    >
      <h1 class="display-1 font-weight-light pb-4">Mon compte</h1>

      <div class="text-subtitle-1 text-medium-emphasis">Adresse email</div>

      <v-text-field
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
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        :rules="[rules.required]"
        density="compact"
        placeholder="Entrer votre mot de passe"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card class="mb-8" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          💡Une fois connecté, vous serez redirigé vers la page de réservation
          pour terminer celle-ci
        </v-card-text>
      </v-card>

      <v-btn block class="mb-2" color="primary" size="large">
        Se connecter
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="register"
          rel="noopener noreferrer"
        >
          Pas encore inscrit ? <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
    rules: {
      required: (value) => !!value || 'Ce champ est obligatoire',
      emailMatch: (value) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        'Veuillez entrer une adresse email valide',
    },
  }),
}
</script>

<!-- <template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="600">
      <v-card-title class="text-center">
        <h1 class="display-1 font-weight-light">Connexion</h1>
      </v-card-title>
      <v-form>
        <v-text-field
          :rules="[rules.required]"
          type="email"
          label="Adresse e-mail"
          prepend-inner-icon="mdi-email"
        ></v-text-field>

        <v-text-field
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="show1 ? 'text' : 'password'"
          label="Mot de passe"
          placeholder="Entrer votre mot de passe"
          prepend-inner-icon="mdi-lock"
          @click:append="show1 = !show1"
        ></v-text-field>

        <br />

        <v-btn
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Connexion
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: true,
      password: 'Password',
      rules: {
        required: (value) => !!value || 'Ce champ est obligatoire',
        emailMatch: () => `The email and password you entered don't match`,
      },
    }
  },
}
</script> -->
