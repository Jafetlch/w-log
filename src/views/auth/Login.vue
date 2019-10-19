<template>
  <v-container grid-list-xs>
    <v-layout row wrap align-center justify-center fill-height my-5>
      <v-flex xs12 md6>
        <v-layout row wrap justify-center my-5>
          <span class="headline">Sign in</span>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6>
        <v-card flat>
          <v-card-text>
            <v-layout v-if="this.$store.getters.getLoading" row align-center justify-center fill-height>
              <v-progress-circular
                indeterminate
                color="primary">
              </v-progress-circular>
            </v-layout>
            <v-form v-else>
              <v-text-field
                name="e-mail"
                label="E-mail"
                id="email"
                v-model="form.username"
                :rules="requiredRule">
              </v-text-field>
              <v-text-field
                name="pwd"
                label="Password"
                type="password"
                id="pwd"
                v-model="form.pwd"
                :rules="requiredRule">
              </v-text-field>
              <v-btn block flat color="success" @click="authenticate">Sign In</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { login } from '@/helpers/auth'
import { credentials } from '@/helpers/passport'
import rulesMixin from '@/mixins/rules-mixin'

export default {
  name: 'Login',
  mixins: [ rulesMixin ],
  data: () => ({
    form: {
      username: '',
      pwd: ''
    }
  }),
  methods: {
    authenticate () {
      this.$store.commit('setLoading', true)
      login(credentials(this.$data.form.username, this.$data.form.pwd))
      .then(response => {
        // console.log(response)
        this.$store.commit('setLoading', false)
        this.$store.commit('setLoginSuccess', response.data)
        this.$router.push({ name: 'Dashboard' })
      })
      .catch(error => {
        this.$store.commit('setLoading', false)
        // console.log(error)
      })
    }
  }
}
</script>
