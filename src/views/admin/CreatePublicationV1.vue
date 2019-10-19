<template>
  <v-flex xs12>
    <v-layout row wrap align-center justify-center>
      <span class="display-3 font-jaapokki">
        A<span class="display-2 font-raleway">dmin</span>
      </span>
    </v-layout>
    <v-layout row mb-3 align-center justify-center>
      <span class="title font-raleway">Create publication</span>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap>
      <!-- // * this is a horizontal menu -->

    </v-layout>
    <v-container grid-list-xs>
      <v-flex xs12>
        <span>this is a note</span>
        <v-form>
          <v-text-field
            v-model="title"
            label="Title"
            required/>
        </v-form>
      </v-flex>
      <v-flex xs12 mt-3>
        <VueEditor v-model="content"></VueEditor>
        <v-flex xs12 mt-4>
          <v-layout row wrap align-center justify-center="">
            <v-btn flat class="green--text">Sent</v-btn>
          </v-layout>
        </v-flex>
      </v-flex>
      <v-flex xs12 mt-3>
        <v-layout row wrap align-center justify-center>
          <span class="headline">This is it how will be see:</span>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap mt-3>
          <span v-html="content"></span>
        </v-layout>
      </v-flex>
    </v-container>
    
  </v-flex>
</template>

<script>
import Navigation from '@/components/Navigation'
import { VueEditor } from 'vue2-editor'
import MarkdownItVue from 'markdown-it-vue'


export default {
  name:'AdminDashboard',
  components: {
    VueEditor,
    Navigation,
    MarkdownItVue
  },
  data: () => ({
    content: ''
  })
}
</script>

<style lang="scss" scoped>
pre {
  font-family: 'Times New Roman' !important;
}
.ql-syntax {
  background: blue;
  color: white;
}
</style>

