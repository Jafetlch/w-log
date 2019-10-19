<template>
  <v-flex xs12>
    <!-- <a @click="$router.go(-1)">back</a> -->
    {{ getData }}
    <v-layout v-if="loading" row wrap align-center justify-center fill-height py-5>
      <v-progress-circular size="50" indeterminate dark></v-progress-circular>
    </v-layout>
    <template v-else>
      <v-img
        :src="`${this.$store.getters.getServerURL}${data.image.path}`"
        :lazy-src="`${this.$store.getters.getServerURL}${data.image.path}`"
        aspect-ratio="2"
        height="300px"
        class="dark">
        <template v-slot:placeholder>
          <v-layout
            fill-height
            align-center
            justify-center
            ma-0>
            <v-progress-circular size="50" indeterminate dark></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
      <v-container grid-list-xs>
        <TitleContent
          :title-first-character="data.title.charAt(0)"
          :title-second-character="data.title.substr(1)"
          :day="data.created_at.substr(8, 2)"
          :month="getMonth()"
          :year="data.created_at.substr(0, 4)"/>
        <v-layout row mt-5 justify-center>
          <div class="text-xs-center">
              <v-chip>{{ data.user.code }}</v-chip>
              <v-chip>{{ data.user.name }}</v-chip>
            </div>
            <div class="text-xs-center">
              <v-chip>{{ data.code }}</v-chip>
            </div>
        </v-layout>
        <!-- <ContentComponent/> -->
        <v-layout row mt-4>
          
        <markdown-it-vue :class="[ 'md-body font-raleway' ]" :content="data.content"/>
        </v-layout>
      </v-container>
    </template>
    <v-fab-transition v-if="this.$store.getters.getDisplayPosts.code">
      <v-btn
        color="cyan"
        dark
        fixed
        bottom
        right
        fab
        @click="goBack">
        <v-icon>arrow_back</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-flex>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'

import TitleContent from '@/components/notices/TitleContent'
import ContentComponent from '@/components/notices/ContentComponent'

import { showData } from '@/helpers/api-queries'

export default {
  name: 'Posts',
  components: {
    TitleContent,
    ContentComponent,
    MarkdownItVue
  },
  data: () => ({
    loading: true,
    data: ''
  }),
  computed: {
    getData () {
      showData('public/post', this.$route.params.code)
      .then(response => {
        if (response.data.data != false) {
          let responseData = response.data.data[0]
          this.data = responseData
          this.loading = false
        } else {
          this.loading = false
          // console.log('nada')
        }
      })
    }
  },
  methods: {
    goBack () {
      this.$store.commit('setDisplayPosts', '')
      this.$router.push({ name: 'Dashboard' })
    },
    getMonth () {
      // var input = '03292014';
      // var year = parseInt(input.substr(4), 10);
      // var day = parseInt(input.substr(2, 2), 10);
      // var month = parseInt(input.substr(0, 2), 10);
      // var date = new Date(year, month - 1, day);
      return Date(2019, this.data.created_at.substr(5, 2), 25).substr(4, 3)
    }
  }
}
</script>
