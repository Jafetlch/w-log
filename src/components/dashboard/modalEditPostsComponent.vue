<template>
  <v-card>
    <v-layout row wrap mt-3>
    </v-layout>
    <v-card-title>
      <span class="headline">Edit Post | {{ returnItem.code }}</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-form v-model="mixin_valid" ref="form" lazy-validation>
          <v-img
            v-if="this.$store.getters.getEditPosts"
            :src="returnImage"
            :lazy-src="returnImage"
            aspect-ratio="0"
            height="400px"
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
                  <v-btn v-if="!!image" small fab dark depressed color="success" @click="image = ''">
                    <v-icon dark>keyboard_return</v-icon>
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
          <v-switch :label="returnItem.is_published ? 'Publicar' : 'Sin publicar'" v-model="returnItem.is_published" class="mx-2"></v-switch>
          <v-text-field
            v-model="returnItem.title"
            label="Title"
            required
            clearable/>
          <v-textarea
            v-show="!displayMarkdown"
            v-model="returnItem.content"
            label="Write here your publication"
            rows="5"
            auto-grow/>
          <markdown-it-vue v-show="displayMarkdown" :class="[ 'md-body font-raleway' ]" :content="returnItem.content"/>
        </v-form>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-btn block flat color="error" @click="destroy">Delete</v-btn>
      <v-spacer></v-spacer>
      <v-btn block flat color="primary" @click="close">Close</v-btn>
      <v-btn :disabled="!returnItem.title || !returnItem.content || !returnItem.image" block flat color="primary" @click="edit">Save</v-btn>
    </v-card-actions>
    <v-fab-transition>
      <v-btn
        v-model="displayMarkdown"
        color="cyan"
        dark
        fixed
        top
        left
        fab
        @click="displayMarkdown = !displayMarkdown">
        <v-icon>code</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-card>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'

import rulesMixin from '@/mixins/rules-mixin'
import imageDrop from '@/mixins/imageDrop-mixin'
import createPostsMixin from '@/mixins/createPosts-mixin'

import { editData, deleteData } from '@/helpers/api-queries'

export default {
  name: 'ModalEditPostsComponent',
  components: {
    MarkdownItVue
  },
  mixins: [ rulesMixin, imageDrop, createPostsMixin ],
  props: {
    item: {
      required: true
    }
  },
  data: () => ({
    form: {
      id: '',
      title: '',
      content: '',
      code: '',
      is_published: '',
      image: ''
    },
    displayMarkdown: false,
    snackbar: false,
    snackbar_message: 'Hola!',
    snackbar_color: 'primary'
  }),
  computed: {
    returnItem () {
      if (this.$store.getters.getEditPosts) {
        this.form.id = this.item.id
        this.form.title = this.item.title
        this.form.content = this.item.content
        this.form.code = this.item.code
        this.form.is_published = this.item.is_published
        this.form.image = !!this.item ? this.item.image.path : null
      }
      return this.form
    },
    returnImage () {
      if (!this.image) {
        return `${this.$store.getters.getServerURL}${this.returnItem.image}`
      }
      return this.image
    }
  },
  methods: {
    close () {
      this.image = ''
      this.$store.commit('setEditPosts', false)
      this.$store.commit('setDisplayPosts', null)
    },
    destroy () {
      deleteData('posts', this.form.id)
        .then(response => {
          this.snackbar = true
          if (response.status === 201) {
            this.snackbar_color = 'success'
            this.snackbar_message = 'El post se creó correctamente.'
          }
          this.$store.dispatch('getPostsByUser')
          this.close()
        })
        .catch(error => {
          console.log(error.response.status)
        })
    },
    edit () {
      editData('posts', this.form.id, {
        'title': this.form.title,
        'content': this.form.content,
        'is_published': this.form.is_published,
        'image': !this.image ? false : this.image,
      })
        .then(response => {
          this.snackbar = true
          if (response.status === 201) {
            this.snackbar_color = 'success'
            this.snackbar_message = 'El post se creó correctamente.'
          }
          this.$store.dispatch('getPostsByUser')
          this.close()
        })
        .catch(error => {
          this.snackbar = true
          if (error.response.status === 400) {
            this.snackbar_color = 'error'
            this.snackbar_message = 'Hubó un error estado 400'
          }
        })
    }
  },
}
</script>
