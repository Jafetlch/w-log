<template>
  <v-flex xs12>
    <v-snackbar
      v-model="snackbar"
      :timeout="6000"
      :color="snackbar_color"
      :top="true"
      :right="true">
      {{ snackbar_message }}
      <v-btn
        flat
        @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-layout v-if="loading" row wrap align-center justify-center mt-5>
      <v-progress-circular size="60" width="4" indeterminate color="primary"></v-progress-circular>
    </v-layout>
    <v-container v-else grid-list-xs>
      <v-flex xs12>
        <v-form v-model="mixin_valid" ref="form" lazy-validation>
          <v-img
            :src="imageCharge ? `${this.$store.getters.getFeatherUrl}storage/images-advertisements/${data.path}` : image"
            :lazy-src="imageCharge ? `${this.$store.getters.getFeatherUrl}storage/images-advertisements/${data.path}` : image"
            aspect-ratio="0"
            height="300px"
            class="transparent"
            @dragover.prevent
            @drop="onDrop">
            <v-layout pa-2 fill-height>
              <v-flex shrink>
                <input
                  type="file"
                  style="display: none"
                  ref="image"
                  accept="image/*"
                  @change="onFilePicked">
                  <v-progress-circular
                    v-if="imageLoadind"
                    indeterminate
                    color="primary"> 
                  </v-progress-circular>
                  <v-btn v-else small fab dark color="primary" @click="pickFile">
                    <v-icon dark>add</v-icon>
                  </v-btn>
              </v-flex>
              <v-spacer></v-spacer>
            </v-layout>
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center>
              <p class="grey--text font-weightlight headline">
                Arrastra aquí la imagen
              </p>
            </v-layout>
          </v-img>
          <v-switch :label="is_published ? 'Publicar' : 'Sin publicar'" v-model="is_published" class="mx-2"></v-switch>
          <v-text-field
            v-model="title"
            label="Title"
            required
            clearable
            counter="23"/>
            <v-textarea
              v-show="!displayMarkdown"
              v-model="content"
              label="Write here your publication"
              rows="1"
              auto-grow/>
            <v-layout v-show="!displayMarkdown" row wrap mt-4>
              <v-btn :disabled="!title || !content || !image" block flat color="primary" @click="create">Create</v-btn>
            </v-layout>
        </v-form>
      </v-flex>
      <v-flex xs12 my-5>
        <v-layout row wrap align-end justify-end>
          <span class="headline">Your content</span>
        </v-layout>
        <v-divider></v-divider>
      </v-flex>
      <markdown-it-vue :class="[ 'md-body font-raleway' ]" :content="content"/>
      
    </v-container>
    <v-fab-transition>
      <v-btn
        v-model="displayMarkdown"
        color="cyan"
        dark
        fixed
        bottom
        right
        fab
        @click="displayMarkdown = !displayMarkdown">
        <v-icon>code</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-flex>
</template>

<script>
import '@/assets/css/markdown.css'
import MarkdownItVue from 'markdown-it-vue'

import { createData } from '@/helpers/api-queries'
import rulesMixin from '@/mixins/rules-mixin'
import imageDrop from '@/mixins/imageDrop-mixin'
import createPostsMixin from '@/mixins/createPosts-mixin'

export default {
  name: 'CreatePublication',
  mixins: [ rulesMixin, imageDrop, createPostsMixin ],
  components: {
    MarkdownItVue
  },
  data: () => ({
    loading: false,
    displayMarkdown: false,

    snackbar: false,
    snackbar_message: 'Hola!',
    snackbar_color: 'primary'
  }),
  computed: {
    textcolor () {
      if (this.$store.getters.getLocalTheme) {
        return 'white--text'
      } else {
        return 'black--text'
      }
    }
  },
  methods: {
    create () {
      this.loading = true
      if (this.$refs.form.validate()) {
        createData('posts', {
          'title': this.title,
          'image': this.image,
          'is_published': this.is_published,
          'content': this.content
        }).then(response => {
          this.loading = false
          this.snackbar = true
          this.clear()
          if (response.status === 201) {
            this.snackbar_color = 'success'
            this.snackbar_message = 'El post se creó correctamente.'
          }
          this.$store.dispatch('getPostsByUser')
        }).catch(error => {
          this.loading = false
          this.snackbar = true
          if (error.response.status === 400) {
            this.snackbar_color = 'error'
            this.snackbar_message = 'Hubó un error estado 400'
          }
        })
      }
    }
  }
}
</script>
