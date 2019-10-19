<template>
  <v-app :dark="this.$store.getters.getLocalTheme">
    <v-toolbar app flat class="transparent">
      <v-toolbar-title class="headline">
        <span
          class="font-jaapokki"
         @click="goToHome">
         W
        </span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        icon
        @click="changeLocalTheme">
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <v-btn
        flat
        icon
        v-if="this.$store.getters.getUser"
        @click="goToDashboard">
        <v-icon>account_circle</v-icon>
      </v-btn>
      <div class="mr-1"></div>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer :class="['pa-3']">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} by F34th3R</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToHome () {
      this.$router.push({ path: '/' })
    },
    changeLocalTheme () {
      this.$store.commit('setLocalTheme', !this.$store.getters.getLocalTheme)
    },
    goToDashboard () {
      if (this.$store.getters.getUser) {
        this.$router.push({ name: 'Dashboard' })
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>

<style lang="scss">
  .theme--dark.application {
    background: #1A1A1A;
  }
  .theme--dark.v-table {
    background: #1A1A1A;
  }

  .theme--dark.v-datatable .v-datatable__actions {
    background: #1A1A1A;
  }

  .theme--light.v-table {
    background-color: #fafafa;
  }
  .theme--light.v-datatable .v-datatable__actions {
    background-color: #fafafa;
  }

  // * FONTS *
  @font-face {
    font-family: 'Raleway';
    src: url('./assets/fonts/Raleway-Regular.ttf');
  }
  @font-face {
    font-family: 'Mandali';
    src: url('./assets/fonts/Mandali-Regular.ttf');
  }
  @font-face {
    font-family: 'LibreBaskerville';
    src: url('./assets/fonts/LibreBaskerville-Regular.ttf');
    // src: url('https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap');
  }
  @font-face {
    font-family: 'Infinity';
    src: url('./assets/fonts/Infinity.ttf');
  }
  @font-face {
    font-family: 'Jaapokki';
    src: url('./assets/fonts/Jaapokki-Regular.otf');
  }

  // * MEDIAQUERIES
  @media only screen and (min-width: 1904px) {
    .container {
      max-width: 1785px !important;
    }
  }
  @media only screen and (min-width: 1264px) {
    .container {
      max-width: 1185px !important;
    }
  }
  @media only screen and (min-width: 960px) {
    .container {
      max-width: 900px !important;
    }
  }
  @media only screen and (max-width: 959px) {
    .title-b {
      font-size: 50px !important;
    }
    .title-s {
      font-size: 36px !important;
    }
  }

  // * VARIABLES *
  $primary_font: 'Raleway';

  // * scss *
  #app {
    font-family: $primary_font;

    .font-raleway {
    font-family: 'Raleway' !important;
    }
    .font-mandali {
    font-family: 'Mandali' !important;
    }
    .font-libre {
      font-family: 'LibreBaskerville' !important;
    }
    .font-jaapokki {
      font-family: 'Jaapokki' !important;
    }
    .font-infinity {
      font-family: 'Infinity' !important;
    }
  }

  // fth CustomScroll
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

</style>
