<template>
  <v-flex xs12>
    <v-layout row wrap align-center justify-center>
      <span class="display-3 font-jaapokki">W<span class="display-2 font-raleway">-log</span></span>
    </v-layout>
    <v-divider></v-divider>
    <v-container grid-list-xs>
      <v-flex xs12 mt-4 mb-4>
      </v-flex>
      <v-layout v-if="loading" row wrap align-center justify-center fill-height py-5>
        <v-progress-circular size="50" indeterminate dark></v-progress-circular>
      </v-layout>
      <template v-else>
        <CardNoticeComponent
          v-for="(item, index) in getData"
          :key="index"
          :code="item.code"
          :title="item.title"
          :image="item.image.path"/>
      </template>
    </v-container>
  </v-flex>
</template>

<script>
import CardNoticeComponent from '@/components/CardNoticesComponent'

import { getData } from '@/helpers/api-queries'

export default {
  name: 'Home',
  components: {
    CardNoticeComponent
  },
  data: () => ({
    loading: true,
    data: ''
  }),
  mounted () {
    this.loading = true
    // if (this.getData.length) {
    //   this.loading = false
    //   return
    // }
    this.$store.dispatch('getPosts')
    this.loading = false
  },
  computed: {
    getData () {
      return this.$store.getters.getPublicPosts
    }
  },
  methods: {
    goToPost (code) {
      console.log(code);
      
      this.$router.push({ name: 'Notice', params: { code } })
    }
  },
}
</script>
