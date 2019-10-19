<template>
  <v-flex xs12 mt-4>
    <v-card flat @click="goToPost">
      <v-img
        v-if="this.$store.getters.getPosts"
        :src="returnImage"
        :lazy-src="returnImage"
        aspect-ratio="1"
        height="150"
        class="dark">
        <template v-slot:placeholder>
          <v-layout
            fill-height
            align-center
            justify-center
            ma-0>
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-layout>
        </template>
        <v-layout row wrap align-end justify-end fill-height>
          <span :class="[ getTheme, 'title font-raleway font-weight-black px-2 py-1 mr-2 mb-2']">{{ title }}</span>
        </v-layout>
      </v-img>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'CardNoticeComponent',
  props: {
    code: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  computed: {
    getTheme () {
      if (this.$store.getters.getLocalTheme) {
        return 'black-fth'
      } else {
        return 'white'
      }
    },
    returnImage () {
      if (!!this.image) {
        return `${this.$store.getters.getServerURL}${this.image}`
      }
      return null
    }
  },
  methods: {
    goToPost () {
      let code = this.code
      this.$router.push({ name: 'Notice', params: { code } })
    }
  },
}
</script>

<style scoped>
.black-fth {
  background: #303030;
}
</style>
