<template>
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
</script>
