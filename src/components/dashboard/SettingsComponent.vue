<template>
  <v-flex xs12>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-form ref="formUsername">
            <v-text-field
              disabled
              label="Nickname"
              id="nickname"/>
          </v-form>
          <v-form ref="formEmail">
            <v-text-field
              disabled
              label="E-mail"
              id="username"/>
          </v-form>
          <v-form ref="formPwd">
            <v-text-field
              disabled
              label="password"
              type="password"
              id="password"/>
          </v-form>
        </v-flex>
        <v-flex xs12 md6>
          <v-layout row wrap align-center justify-center fill-height>
            <!-- <v-avatar
              :tile="false"
              size="140"
              color="grey lighten-4">
              <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
            </v-avatar> -->
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap my-4>
        <v-btn disabled block flat color="primary">Actualizar</v-btn>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap mt-4>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              block
              flat
              color="error"
              v-on="on">
              Log Out
            </v-btn>
          </template>
          <v-list>
            <v-list-tile
              @click="logout">
              <v-list-tile-title>Exit</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Cancel</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  name: 'SettingsComponent',
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push({ name: 'Login' })
      // location.reload()
    }
  }
}
</script>
